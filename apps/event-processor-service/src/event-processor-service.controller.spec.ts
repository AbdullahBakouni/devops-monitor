import { Test, TestingModule } from '@nestjs/testing';
import { EventProcessorServiceController } from './event-processor-service.controller';
import { EventProcessorServiceService } from './event-processor-service.service';

describe('EventProcessorServiceController', () => {
  let eventProcessorServiceController: EventProcessorServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventProcessorServiceController],
      providers: [EventProcessorServiceService],
    }).compile();

    eventProcessorServiceController = app.get<EventProcessorServiceController>(EventProcessorServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventProcessorServiceController.getHello()).toBe('Hello World!');
    });
  });
});
