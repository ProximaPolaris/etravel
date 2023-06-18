import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travel } from './entities/travel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Travel])],
  controllers: [TravelsController],
  providers: [TravelsService],
  exports: [TravelsService],
})
export class TravelsModule {}
