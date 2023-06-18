import { Injectable } from '@nestjs/common';
import { CreateLodgingDto } from './dto/create-lodging.dto';
import { UpdateLodgingDto } from './dto/update-lodging.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lodging } from './entities/lodging.entity';

@Injectable()
export class LodgingsService {
  constructor(
    @InjectRepository(Lodging)
    private lodgingRepository: Repository<Lodging>,
  ) {}

  create(createLodgingDto: CreateLodgingDto) {
    return this.lodgingRepository.save(createLodgingDto);
  }

  findAll() {
    return this.lodgingRepository.find();
  }

  findOne(id: number) {
    return this.lodgingRepository.findOneBy({ id });
  }

  update(id: number, updateLodgingDto: UpdateLodgingDto) {
    return this.lodgingRepository.update(id, updateLodgingDto);
  }

  remove(id: number) {
    return this.lodgingRepository.delete({ id });
  }
}
