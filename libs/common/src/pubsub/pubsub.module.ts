import { Module, Global } from '@nestjs/common';
import { PubSubProvider } from './pubsub.provider';

@Global()
@Module({
  providers: [PubSubProvider],
  exports: [PubSubProvider],
})
export class PubSubModule {}
