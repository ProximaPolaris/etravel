import { Module } from '@nestjs/common';
import { LodgingsService } from './lodgings.service';
import { LodgingsController } from './lodgings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lodging } from './entities/lodging.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lodging])],
  controllers: [LodgingsController],
  providers: [LodgingsService],
  exports: [LodgingsService],
})
export class LodgingsModule {}
