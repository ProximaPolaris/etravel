import { Module } from '@nestjs/common';
import { TypeActivitiesService } from './type-activities.service';
import { TypeActivitiesController } from './type-activities.controller';

@Module({
  controllers: [TypeActivitiesController],
  providers: [TypeActivitiesService]
})
export class TypeActivitiesModule {}
