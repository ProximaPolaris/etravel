import { Module } from '@nestjs/common';
import { LodgingsService } from './lodgings.service';
import { LodgingsController } from './lodgings.controller';

@Module({
  controllers: [LodgingsController],
  providers: [LodgingsService]
})
export class LodgingsModule {}
