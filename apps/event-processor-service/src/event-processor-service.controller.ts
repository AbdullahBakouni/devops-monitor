import { Controller } from '@nestjs/common';
import { EventProcessorService } from './event-processor-service.service';

@Controller()
export class EventProcessorServiceController {
  constructor(
    private readonly eventProcessorServiceService: EventProcessorService,
  ) {}
}
