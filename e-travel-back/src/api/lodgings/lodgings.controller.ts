import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LodgingsService } from './lodgings.service';
import { CreateLodgingDto } from './dto/create-lodging.dto';
import { UpdateLodgingDto } from './dto/update-lodging.dto';

@Controller('lodgings')
export class LodgingsController {
  constructor(private readonly lodgingsService: LodgingsService) {}

  @Post()
  create(@Body() createLodgingDto: CreateLodgingDto) {
    return this.lodgingsService.create(createLodgingDto);
  }

  @Get()
  findAll() {
    return this.lodgingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lodgingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLodgingDto: UpdateLodgingDto) {
    return this.lodgingsService.update(+id, updateLodgingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lodgingsService.remove(+id);
  }
}
