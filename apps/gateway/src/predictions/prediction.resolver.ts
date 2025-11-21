import { Resolver, Query, Subscription, Args, Int } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from '@app/common/pubsub/pubsub.provider';
import { DatabaseService } from '@app/database';
import { FailurePredictionDto, PredictionStatsDto } from './dto/prediction.dto';

interface FailurePrediction {
  id: string;
  service: string;
  windowHours: number;
  probability: number;
  reason: string | null;
  createdAt: Date;
}
interface PredictionUpdatedPayload {
  predictionUpdated: FailurePredictionDto;
}

interface PredictionUpdatedVariables {
  service?: string;
}

@Resolver(() => FailurePredictionDto)
export class PredictionResolver {
  constructor(
    private readonly prisma: DatabaseService,
    @Inject(PUB_SUB) private readonly pubSub: RedisPubSub,
  ) {}

  @Query(() => [FailurePredictionDto], { name: 'failurePredictions' })
  async getFailurePredictions(
    @Args('service', { nullable: true }) service?: string,
    @Args('windowHours', { type: () => Int, nullable: true })
    windowHours?: number,
    @Args('limit', { nullable: true, defaultValue: 100 }) limit?: number,
  ): Promise<FailurePredictionDto[]> {
    const predictions = (await this.prisma.failurePrediction.findMany({
      where: {
        ...(service && { service }),
        ...(windowHours && { windowHours }),
      },
      orderBy: { createdAt: 'desc' },
      take: limit,
    })) as FailurePrediction[];

    return predictions.map((pred) => ({
      id: pred.id,
      service: pred.service,
      windowHours: pred.windowHours,
      probability: pred.probability,
      reason: pred.reason ?? undefined,
      timestamp: pred.createdAt.toISOString(),
    }));
  }

  @Query(() => FailurePredictionDto, {
    name: 'latestPrediction',
    nullable: true,
  })
  async getLatestPrediction(
    @Args('service') service: string,
  ): Promise<FailurePredictionDto | null> {
    const prediction = (await this.prisma.failurePrediction.findFirst({
      where: { service },
      orderBy: { createdAt: 'desc' },
    })) as FailurePrediction | null;

    if (!prediction) return null;

    return {
      id: prediction.id,
      service: prediction.service,
      windowHours: prediction.windowHours,
      probability: prediction.probability,
      reason: prediction.reason ?? undefined,
      timestamp: prediction.createdAt.toISOString(),
    };
  }

  @Query(() => PredictionStatsDto, { name: 'predictionStatistics' })
  async getPredictionStatistics(): Promise<PredictionStatsDto> {
    // Get latest prediction per service
    const services = (await this.prisma.failurePrediction.findMany({
      distinct: ['service'],
      orderBy: { createdAt: 'desc' },
    })) as FailurePrediction[];

    const latestPredictions = await Promise.all(
      services.map(async (s) => {
        const latest = (await this.prisma.failurePrediction.findFirst({
          where: { service: s.service },
          orderBy: { createdAt: 'desc' },
        })) as FailurePrediction;
        return latest;
      }),
    );

    const total = latestPredictions.length;
    const lowRisk = latestPredictions.filter(
      (p) => p.probability <= 0.4,
    ).length;
    const moderateRisk = latestPredictions.filter(
      (p) => p.probability > 0.4 && p.probability <= 0.7,
    ).length;
    const highRisk = latestPredictions.filter(
      (p) => p.probability > 0.7,
    ).length;

    const avgProbability =
      total > 0
        ? latestPredictions.reduce((sum, p) => sum + p.probability, 0) / total
        : 0;

    return {
      total,
      lowRisk,
      moderateRisk,
      highRisk,
      averageProbability: avgProbability,
    };
  }

  @Subscription(() => FailurePredictionDto, {
    name: 'predictionUpdated',
    filter: (
      payload: PredictionUpdatedPayload,
      variables: PredictionUpdatedVariables,
    ) => {
      if (!variables.service) return true;
      return payload.predictionUpdated.service === variables.service;
    },
  })
  predictionUpdated() {
    return this.pubSub.asyncIterator('predictionUpdated');
  }
}
