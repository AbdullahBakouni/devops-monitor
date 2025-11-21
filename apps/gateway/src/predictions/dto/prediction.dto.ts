import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import {
  IsString,
  IsInt,
  IsNumber,
  IsOptional,
  IsDateString,
  Min,
  Max,
} from 'class-validator';

@ObjectType()
export class FailurePredictionDto {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsString()
  service: string;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  windowHours: number;

  @Field(() => Float)
  @IsNumber()
  @Min(0)
  @Max(1)
  probability: number;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  reason?: string;

  @Field()
  @IsDateString()
  timestamp: string;
}

@ObjectType()
export class PredictionStatsDto {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  lowRisk: number;

  @Field(() => Int)
  moderateRisk: number;

  @Field(() => Int)
  highRisk: number;

  @Field(() => Float)
  averageProbability: number;
}
