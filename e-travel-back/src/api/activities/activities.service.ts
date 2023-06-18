import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  create(createActivityDto: CreateActivityDto) {
    const activity = new Activity();
    activity.typeId = createActivityDto.type_id;
    activity.travelId = createActivityDto.travel_id;
    activity.mapUrl = createActivityDto.map_url;

    return this.activityRepository.save(activity);
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: number) {
    return this.activityRepository.findOneBy({ id });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    const partialActivity: QueryDeepPartialEntity<Activity> = {
      typeId: updateActivityDto.type_id,
      travelId: updateActivityDto.travel_id,
      mapUrl: updateActivityDto.map_url,
    };

    return this.activityRepository.update(id, partialActivity);
  }

  remove(id: number) {
    return this.activityRepository.delete(id);
  }
}
