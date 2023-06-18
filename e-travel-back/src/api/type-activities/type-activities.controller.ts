import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeActivitiesService } from './type-activities.service';
import { CreateTypeActivityDto } from './dto/create-type-activity.dto';
import { UpdateTypeActivityDto } from './dto/update-type-activity.dto';

@Controller('type-activities')
export class TypeActivitiesController {
  constructor(private readonly typeActivitiesService: TypeActivitiesService) {}

  @Post()
  create(@Body() createTypeActivityDto: CreateTypeActivityDto) {
    return this.typeActivitiesService.create(createTypeActivityDto);
  }

  @Get()
  findAll() {
    return this.typeActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeActivityDto: UpdateTypeActivityDto) {
    return this.typeActivitiesService.update(+id, updateTypeActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeActivitiesService.remove(+id);
  }
}
