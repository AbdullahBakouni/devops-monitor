import { NestFactory } from '@nestjs/core';
import { StatisticsServiceModule } from './statistics-service.module';

async function bootstrap() {
  const app = await NestFactory.create(StatisticsServiceModule);
  await app.listen(process.env.STATISTIC_SERVICES_PORT ?? 3007);
}
bootstrap();
