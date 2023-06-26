import { Module } from '@nestjs/common';
import { TypeActivitiesService } from './type-activities.service';
import { TypeActivitiesController } from './type-activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeActivity } from './entities/type-activity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeActivity])],
  controllers: [TypeActivitiesController],
  providers: [TypeActivitiesService],
  exports: [TypeActivitiesService],
})
export class TypeActivitiesModule {}
