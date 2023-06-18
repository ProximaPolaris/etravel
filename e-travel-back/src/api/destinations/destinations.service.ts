import { Injectable } from '@nestjs/common';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationsService {
  constructor(
    @InjectRepository(Destination)
    private destinationRepository: Repository<Destination>,
  ) {}

  create(createDestinationDto: CreateDestinationDto) {
    return this.destinationRepository.save(createDestinationDto);
  }

  findAll() {
    return this.destinationRepository.find();
  }

  findOne(id: number) {
    return this.destinationRepository.findOneBy({ id });
  }

  update(id: number, updateDestinationDto: UpdateDestinationDto) {
    return this.destinationRepository.update(id, updateDestinationDto);
  }

  remove(id: number) {
    return this.destinationRepository.delete({ id });
  }
}
