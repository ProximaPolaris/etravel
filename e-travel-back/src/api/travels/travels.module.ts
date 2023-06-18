import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService]
})
export class TravelsModule {}
