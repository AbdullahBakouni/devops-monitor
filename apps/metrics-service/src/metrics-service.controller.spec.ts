import { Test, TestingModule } from '@nestjs/testing';
import { MetricsServiceController } from './metrics-service.controller';
import { MetricsServiceService } from './metrics-service.service';

describe('MetricsServiceController', () => {
  let metricsServiceController: MetricsServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MetricsServiceController],
      providers: [MetricsServiceService],
    }).compile();

    metricsServiceController = app.get<MetricsServiceController>(MetricsServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(metricsServiceController.getHello()).toBe('Hello World!');
    });
  });
});
