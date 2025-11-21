import { Resolver, Query, Subscription, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { DatabaseService } from '@app/database';
import { ServiceRiskDto, RiskStatsDto, RiskLevel } from './dto/risk.dto';

interface ServiceRisk {
  id: string;
  service: string;
  riskScore: number;
  level: string;
  reason: string | null;
  createdAt: Date;
}
interface RiskUpdatedPayload {
  riskUpdated: ServiceRiskDto;
}

interface RiskUpdatedVariables {
  service?: string;
}
@Resolver(() => ServiceRiskDto)
export class RiskResolver {
  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => [ServiceRiskDto], { name: 'serviceRisks' })
  async getServiceRisks(
    @Args('service', { nullable: true }) service?: string,
    @Args('limit', { nullable: true, defaultValue: 100 }) limit?: number,
  ): Promise<ServiceRiskDto[]> {
    const risks = (await this.prisma.serviceRisk.findMany({
      where: service ? { service } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limit,
    })) as ServiceRisk[];

    return risks.map((risk) => ({
      id: risk.id,
      service: risk.service,
      riskScore: risk.riskScore,
      level: risk.level as RiskLevel,
      reason: risk.reason ?? undefined,
      timestamp: risk.createdAt.toISOString(),
    }));
  }

  @Query(() => ServiceRiskDto, { name: 'latestRisk', nullable: true })
  async getLatestRisk(
    @Args('service') service: string,
  ): Promise<ServiceRiskDto | null> {
    const risk = (await this.prisma.serviceRisk.findFirst({
      where: { service },
      orderBy: { createdAt: 'desc' },
    })) as ServiceRisk | null;

    if (!risk) return null;

    return {
      id: risk.id,
      service: risk.service,
      riskScore: risk.riskScore,
      level: risk.level as RiskLevel,
      reason: risk.reason ?? undefined,
      timestamp: risk.createdAt.toISOString(),
    };
  }

  @Query(() => RiskStatsDto, { name: 'riskStatistics' })
  async getRiskStatistics(): Promise<RiskStatsDto> {
    // Get latest risk per service
    const services = (await this.prisma.serviceRisk.findMany({
      distinct: ['service'],
      orderBy: { createdAt: 'desc' },
    })) as ServiceRisk[];

    const latestRisks = await Promise.all(
      services.map(async (s) => {
        const latest = (await this.prisma.serviceRisk.findFirst({
          where: { service: s.service },
          orderBy: { createdAt: 'desc' },
        })) as ServiceRisk;
        return latest;
      }),
    );

    const stats = {
      total: latestRisks.length,
      normal: latestRisks.filter((r) => r.level === 'NORMAL').length,
      warning: latestRisks.filter((r) => r.level === 'WARNING').length,
      critical: latestRisks.filter((r) => r.level === 'CRITICAL').length,
    };

    return stats;
  }

  @Subscription(() => ServiceRiskDto, {
    name: 'riskUpdated',
    filter: (payload: RiskUpdatedPayload, variables: RiskUpdatedVariables) => {
      if (!variables.service) return true;
      return payload.riskUpdated.service === variables.service;
    },
  })
  riskUpdated() {
    return this.pubSub.asyncIterator('riskUpdated');
  }
}
