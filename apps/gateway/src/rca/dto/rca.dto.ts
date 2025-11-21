import { ObjectType, Field, Int } from '@nestjs/graphql';
import { IsString, IsInt, IsDateString, Min, Max } from 'class-validator';

@ObjectType()
export class RootCauseReportDto {
  @Field()
  @IsString()
  id: string;

  @Field()
  @IsString()
  service: string;

  @Field()
  @IsString()
  cause: string;

  @Field(() => Int)
  @IsInt()
  @Min(0)
  @Max(100)
  confidence: number;

  @Field()
  @IsDateString()
  timestamp: string;
}

@ObjectType()
export class RCAStatsDto {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  highConfidence: number;

  @Field(() => Int)
  mediumConfidence: number;

  @Field(() => Int)
  lowConfidence: number;
}
