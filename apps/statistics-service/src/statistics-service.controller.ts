import { Controller } from '@nestjs/common';
import { StatisticsService } from './statistics-service.service';

@Controller()
export class StatisticsServiceController {
  constructor(private readonly statisticsServiceService: StatisticsService) {}
}
