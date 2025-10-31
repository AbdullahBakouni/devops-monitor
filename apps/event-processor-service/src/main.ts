import { NestFactory } from '@nestjs/core';
import { EventProcessorServiceModule } from './event-processor-service.module';

async function bootstrap() {
  const app = await NestFactory.create(EventProcessorServiceModule);
  await app.listen(process.env.EVENTS_PROCESSOR_PORT ?? 3004);
}
bootstrap();
