import { Injectable } from '@nestjs/common';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Continent } from './entities/continent.entity';

@Injectable()
export class ContinentsService {
  constructor(
    @InjectRepository(Continent)
    private continentRepository: Repository<Continent>,
  ) {}

  create(createContinentDto: CreateContinentDto) {
    return this.continentRepository.save(createContinentDto);
  }

  findAll() {
    return this.continentRepository.find();
  }

  findOne(code: string) {
    return this.continentRepository.findOneBy({ code });
  }

  update(code: string, updateContinentDto: UpdateContinentDto) {
    return this.continentRepository.update(code, updateContinentDto);
  }

  remove(code: string) {
    return this.continentRepository.delete({ code });
  }
}
