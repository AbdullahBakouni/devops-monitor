import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MetricsAlertDTO {
  @Field()
  type: string; // CRITICAL | WARNING | ANOMALY | INFO

  @Field()
  title: string;

  @Field()
  message: string;

  @Field()
  service: string;

  @Field()
  cluster: string; // ✅ Now required, default to 'unknown'

  @Field(() => Float)
  value: number; // value observed (e.g. CPU 92%)

  @Field(() => Float)
  threshold: number; // ✅ Now required, use 0 for anomaly alerts

  @Field(() => Float)
  expected: number; // ✅ Now required, use 0 for threshold alerts

  @Field()
  metric: string; // cpu | memory | traffic | latency | disk

  @Field()
  metricDisplayName: string; // ✅ Now required, computed from metric

  @Field(() => Float)
  anomalyConfidence: number; // ✅ Now required, use 0 for non-ML alerts

  @Field({ nullable: true }) score?: number;

  @Field()
  createdAt: string;
}
