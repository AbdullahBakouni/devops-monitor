import { NestFactory } from '@nestjs/core';
import { LogServiceModule } from './log-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LogServiceModule);
  await app.listen(process.env.LOGS_SERVICES_PORT ?? 3005);
}
bootstrap();
