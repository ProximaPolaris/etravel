import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContinentsService } from './continents.service';
import { CreateContinentDto } from './dto/create-continent.dto';
import { UpdateContinentDto } from './dto/update-continent.dto';

@Controller('continents')
export class ContinentsController {
  constructor(private readonly continentsService: ContinentsService) {}

  @Post()
  create(@Body() createContinentDto: CreateContinentDto) {
    return this.continentsService.create(createContinentDto);
  }

  @Get()
  findAll() {
    return this.continentsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.continentsService.findOne(code);
  }

  @Patch(':code')
  update(
    @Param('code') code: string,
    @Body() updateContinentDto: UpdateContinentDto,
  ) {
    return this.continentsService.update(code, updateContinentDto);
  }

  @Delete(':code')
  remove(@Param('code') code: string) {
    return this.continentsService.remove(code);
  }
}
