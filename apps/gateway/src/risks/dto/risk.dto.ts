import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import {
  IsString,
  IsInt,
  IsEnum,
  IsOptional,
  IsDateString,
  Min,
  Max,
} from 'class-validator';

export enum RiskLevel {
  NORMAL = 'NORMAL',
  WARNING = 'WARNING',
  CRITICAL = 'CRITICAL',
}

registerEnumType(RiskLevel, {
  name: 'RiskLevel',
  description: 'Risk level for a service',
});

@ObjectType()
export class ServiceRiskDto {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsString()
  service: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  riskScore: number;

  @Field(() => RiskLevel)
  @IsEnum(RiskLevel)
  level: RiskLevel;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  reason?: string;

  @Field()
  @IsDateString()
  timestamp: string;
}

@ObjectType()
export class RiskStatsDto {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  normal: number;

  @Field(() => Int)
  warning: number;

  @Field(() => Int)
  critical: number;
}
