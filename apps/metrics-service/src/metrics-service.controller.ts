import { Controller } from '@nestjs/common';
import { MetricsService } from './metrics-service.service';

@Controller()
export class MetricsServiceController {
  constructor(private readonly metricsServiceService: MetricsService) {}
}
