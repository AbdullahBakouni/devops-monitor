import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';
import { AppLoggerModule } from './app-logger/app-logger.module';
// import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
// import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './events/events.module';
import { DatabaseModule } from '@app/database';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { PubSubModule } from '@app/common';
import { NotificationGatewayModule } from './notifications/notification.module';
import { GatewayMetricsModule } from './metrics/metric.module';
import { AlertsGatewayModule } from './alerts/alert.module';
import { RisksGatewayModule } from './risks/risk.module';
import { PredictionsGatewayModule } from './predictions/prediction.module';
import { RcaGatewayModule } from './rca/rca.module';
@Module({
  imports: [
    AppLoggerModule,
    ConfigModule,
    EventsModule,
    NotificationGatewayModule,
    GatewayMetricsModule,
    DatabaseModule,
    AlertsGatewayModule,
    RisksGatewayModule,
    PredictionsGatewayModule,
    RcaGatewayModule,
    PubSubModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/gateway/schema.gql'),
      sortSchema: true,
      playground: false, // Disable old playground
      introspection: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        'graphql-ws': {
          path: '/graphql',
        },
      },
      buildSchemaOptions: {
        dateScalarMode: 'isoDate', // This tells GraphQL to use ISO date strings
      },
      context: ({ req, res }) => ({ req, res }),
    }),
    // ThrottlerModule.forRoot([
    //   {
    //     name: 'short',
    //     ttl: 10000,
    //     limit: 3,
    //   },
    //   {
    //     name: 'long',
    //     ttl: 60000,
    //     limit: 100,
    //   },
    // ]),
  ],
  controllers: [GatewayController],
  providers: [
    GatewayService,
    // ,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // },
  ],
})
export class GatewayModule {}
