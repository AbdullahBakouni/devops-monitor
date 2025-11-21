import { Resolver, Query, Subscription, Args, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { DatabaseService } from '@app/database';
import { RootCauseReportDto, RCAStatsDto } from './dto/rca.dto';

interface RootCauseReport {
  id: string;
  service: string;
  cause: string;
  confidence: number;
  createdAt: Date;
}
interface RcaReportCreatedPayload {
  rcaReportCreated: RootCauseReportDto;
}

interface RcaReportCreatedVariables {
  service?: string;
}

@Resolver(() => RootCauseReportDto)
export class RCAResolver {
  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => [RootCauseReportDto], { name: 'rcaReports' })
  async getRCAReports(
    @Args('service', { nullable: true }) service?: string,
    @Args('minConfidence', { type: () => Int, nullable: true })
    minConfidence?: number,
    @Args('limit', { nullable: true, defaultValue: 50 }) limit?: number,
  ): Promise<RootCauseReportDto[]> {
    const reports = (await this.prisma.rootCauseReport.findMany({
      where: {
        ...(service && { service }),
        ...(minConfidence && { confidence: { gte: minConfidence } }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })) as RootCauseReport[];

    return reports.map((report) => ({
      id: report.id,
      service: report.service,
      cause: report.cause,
      confidence: report.confidence,
      timestamp: report.createdAt.toISOString(),
    }));
  }

  @Query(() => RootCauseReportDto, { name: 'latestRCAReport', nullable: true })
  async getLatestRCAReport(
    @Args('service') service: string,
  ): Promise<RootCauseReportDto | null> {
    const report = (await this.prisma.rootCauseReport.findFirst({
      where: { service },
      orderBy: { createdAt: 'desc' },
    })) as RootCauseReport | null;

    if (!report) return null;

    return {
      id: report.id,
      service: report.service,
      cause: report.cause,
      confidence: report.confidence,
      timestamp: report.createdAt.toISOString(),
    };
  }

  @Query(() => RCAStatsDto, { name: 'rcaStatistics' })
  async getRCAStatistics(): Promise<RCAStatsDto> {
    const reports = (await this.prisma.rootCauseReport.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    })) as RootCauseReport[];

    return {
      total: reports.length,
      highConfidence: reports.filter((r) => r.confidence >= 80).length,
      mediumConfidence: reports.filter(
        (r) => r.confidence >= 60 && r.confidence < 80,
      ).length,
      lowConfidence: reports.filter((r) => r.confidence < 60).length,
    };
  }

  @Subscription(() => RootCauseReportDto, {
    name: 'rcaReportCreated',
    filter: (
      payload: RcaReportCreatedPayload,
      variables: RcaReportCreatedVariables,
    ) => {
      if (!variables.service) return true;
      return payload.rcaReportCreated.service === variables.service;
    },
  })
  rcaReportCreated() {
    return this.pubSub.asyncIterator('rcaReportCreated');
  }
}
