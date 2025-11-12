// GraphQL DTOs / Inputs

import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class LogEntryDTO {
  @Field() id: string;
  @Field() service: string;
  @Field() level: string;
  @Field() message: string;
  @Field({ nullable: true }) traceId?: string;
  @Field({ nullable: true }) spanId?: string;
  @Field({ nullable: true }) host?: string;
  @Field({ nullable: true }) source?: string;
  @Field({ nullable: true }) pod?: string;
  @Field({ nullable: true }) namespace?: string;
  @Field({ nullable: true }) image?: string;
  @Field(() => String) timestamp: string;
}

@InputType()
export class LogSearchFilter {
  @Field({ nullable: true }) service?: string;
  @Field({ nullable: true }) level?: string; // info|warn|error...
  @Field({ nullable: true }) q?: string; // free-text
  @Field({ nullable: true }) from?: string; // ISO
  @Field({ nullable: true }) to?: string; // ISO
  @Field({ nullable: true }) cursor?: string; // id for pagination
  @Field({ nullable: true }) limit?: number; // default 50
}

@ObjectType()
export class LogSearchResult {
  @Field(() => [LogEntryDTO]) items: LogEntryDTO[];
  @Field({ nullable: true }) nextCursor?: string;
}
