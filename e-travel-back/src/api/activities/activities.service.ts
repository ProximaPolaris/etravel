import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  create(createActivityDto: CreateActivityDto) {
    return this.activityRepository.save(createActivityDto);
  }

  findAll() {
    return this.activityRepository.find();
  }

  findOne(id: number) {
    return this.activityRepository.findOneBy({ id });
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.activityRepository.update(id, updateActivityDto);
  }

  remove(id: number) {
    return this.activityRepository.delete({ id });
  }
}
