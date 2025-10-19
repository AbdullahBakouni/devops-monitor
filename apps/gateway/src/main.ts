import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { AppLoggerService } from './app-logger/app-logger.service';
import { Logger } from '@nestjs/common';
import { createServer } from 'http';
import { Server as WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/use/ws';
import { GraphQLSchemaHost } from '@nestjs/graphql';

async function bootstrap() {
  // ⚙️ إنشاء تطبيق Nest
  const app = await NestFactory.create(GatewayModule, {
    bufferLogs: true,
  });

  const appLogger = app.get(AppLoggerService);
  app.useLogger(appLogger);

  // const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? '')
  //   .split(',')
  //   .map((origin) => origin.trim())
  //   .filter(Boolean);

  // app.enableCors({
  //   origin: (
  //     origin: string,
  //     callback: (err: Error | null, allow?: boolean) => void,
  //   ) => {
  //     if (!origin) return callback(null, true);
  //     if (allowedOrigins.includes(origin)) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error('Not allowed by CORS'));
  //     }
  //   },
  // });
  //
  app.enableCors({ origin: true, credentials: true });
  await app.init();
  const httpServer = createServer(app.getHttpAdapter().getInstance());

  const gqlSchemaHost = app.get(GraphQLSchemaHost);
  const schema = gqlSchemaHost.schema;

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: '/graphql',
  });

  useServer(
    {
      schema,
      onConnect: (ctx) => {
        Logger.log('🔌 GraphQL WS client connected');
      },
      onDisconnect: (ctx, code, reason) => {
        Logger.warn('❌ GraphQL WS client disconnected');
      },
    },
    wsServer,
  );

  const port = process.env.PORT ?? 3000;

  await new Promise<void>((resolve) => httpServer.listen(port, resolve));

  Logger.log(`🚀 Gateway running on http://localhost:${port}/graphql`);
}

bootstrap();
