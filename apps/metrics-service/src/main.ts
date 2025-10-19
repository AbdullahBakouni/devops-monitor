import { NestFactory } from '@nestjs/core';
import { MetricsServiceModule } from './metrics-service.module';

async function bootstrap() {
  const app = await NestFactory.create(MetricsServiceModule);
  await app.listen(process.env.METRICS_PORT ?? 3001);
}
bootstrap();
