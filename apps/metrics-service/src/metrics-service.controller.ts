import { Controller, Get } from '@nestjs/common';
import { MetricsServiceService } from './metrics-service.service';

@Controller()
export class MetricsServiceController {
  constructor(private readonly metricsServiceService: MetricsServiceService) {}

  @Get()
  getHello(): string {
    return this.metricsServiceService.getHello();
  }
}
