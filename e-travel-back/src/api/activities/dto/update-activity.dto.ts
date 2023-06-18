import { IsOptional, IsInt, IsString } from 'class-validator';
import { CreateActivityDto } from './create-activity.dto';
import { PartialType } from '@nestjs/mapped-types';
export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsOptional()
  @IsInt()
  type_id?: number;

  @IsOptional()
  @IsInt()
  travel_id?: number;

  @IsOptional()
  @IsString()
  map_url?: string;
}
