import { Injectable } from '@nestjs/common';
import { CreateTypeActivityDto } from './dto/create-type-activity.dto';
import { UpdateTypeActivityDto } from './dto/update-type-activity.dto';

@Injectable()
export class TypeActivitiesService {
  create(createTypeActivityDto: CreateTypeActivityDto) {
    return 'This action adds a new typeActivity';
  }

  findAll() {
    return `This action returns all typeActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeActivity`;
  }

  update(id: number, updateTypeActivityDto: UpdateTypeActivityDto) {
    return `This action updates a #${id} typeActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeActivity`;
  }
}
