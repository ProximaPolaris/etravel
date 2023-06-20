import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Travel } from './entities/travel.entity';

@Injectable()
export class TravelsService {
  constructor(
    @InjectRepository(Travel)
    private travelRepository: Repository<Travel>,
  ) {}

  create(createTravelDto: CreateTravelDto) {
    return this.travelRepository.save(createTravelDto);
  }

  findAll() {
    return this.travelRepository.find();
  }

  findOne(id: number) {
    return this.travelRepository.findOneBy({ id });
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return this.travelRepository.update(id, updateTravelDto);
  }

  remove(id: number) {
    return this.travelRepository.delete({ id });
  }
}
