import { Injectable } from '@nestjs/common';
import { CreateLodgingDto } from './dto/create-lodging.dto';
import { UpdateLodgingDto } from './dto/update-lodging.dto';

@Injectable()
export class LodgingsService {
  create(createLodgingDto: CreateLodgingDto) {
    return 'This action adds a new lodging';
  }

  findAll() {
    return `This action returns all lodgings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lodging`;
  }

  update(id: number, updateLodgingDto: UpdateLodgingDto) {
    return `This action updates a #${id} lodging`;
  }

  remove(id: number) {
    return `This action removes a #${id} lodging`;
  }
}
