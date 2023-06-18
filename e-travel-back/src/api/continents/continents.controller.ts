import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.continentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContinentDto: UpdateContinentDto) {
    return this.continentsService.update(+id, updateContinentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.continentsService.remove(+id);
  }
}
