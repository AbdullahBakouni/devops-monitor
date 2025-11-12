import { Controller } from '@nestjs/common';
import { LogService } from './log-service.service';

@Controller()
export class LogServiceController {
  constructor(private readonly logs: LogService) {}
}
