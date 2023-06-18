import { Module } from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { ContinentsController } from './continents.controller';

@Module({
  controllers: [ContinentsController],
  providers: [ContinentsService]
})
export class ContinentsModule {}
