import { Injectable } from '@nestjs/common';
import { CreateCalendarDto } from './dto/create-calendar.dto';
import { UpdateCalendarDto } from './dto/update-calendar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calendar } from './entities/calendar.entity';

@Injectable()
export class CalendarsService {
  constructor(
    @InjectRepository(Calendar)
    private calendarRepository: Repository<Calendar>,
  ) {}

  create(createCalendarDto: CreateCalendarDto) {
    return this.calendarRepository.save(createCalendarDto);
  }

  findAll() {
    return this.calendarRepository.find();
  }

  findOne(id: number) {
    return this.calendarRepository.findOneBy({ id });
  }

  update(id: number, updateCalendarDto: UpdateCalendarDto) {
    return this.calendarRepository.update(id, updateCalendarDto);
  }

  remove(id: number) {
    return this.calendarRepository.delete({ id });
  }
}
