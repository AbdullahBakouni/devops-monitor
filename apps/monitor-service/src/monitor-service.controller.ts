import { Controller } from '@nestjs/common';
import { MonitorServiceService } from './monitor-service.service';

@Controller()
export class MonitorServiceController {
  constructor(private readonly monitorServiceService: MonitorServiceService) {}
}
