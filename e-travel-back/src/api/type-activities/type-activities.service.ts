import { Injectable } from '@nestjs/common';
import { CreateTypeActivityDto } from './dto/create-type-activity.dto';
import { UpdateTypeActivityDto } from './dto/update-type-activity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeActivity } from './entities/type-activity.entity';

@Injectable()
export class TypeActivitiesService {
  constructor(
    @InjectRepository(TypeActivity)
    private typeActivityRepository: Repository<TypeActivity>,
  ) {}

  create(createTypeActivityDto: CreateTypeActivityDto) {
    return this.typeActivityRepository.save(createTypeActivityDto);
  }

  findAll() {
    return this.typeActivityRepository.find();
  }

  findOne(id: number) {
    return this.typeActivityRepository.findOneBy({ id });
  }

  update(id: number, updateTypeActivityDto: UpdateTypeActivityDto) {
    return this.typeActivityRepository.update(id, updateTypeActivityDto);
  }

  remove(id: number) {
    return this.typeActivityRepository.delete({ id });
  }
}
