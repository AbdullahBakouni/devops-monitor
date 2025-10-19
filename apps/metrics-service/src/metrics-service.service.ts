import { Injectable } from '@nestjs/common';

@Injectable()
export class MetricsServiceService {
  getHello(): string {
    return 'Hello From Merics!';
  }
}
