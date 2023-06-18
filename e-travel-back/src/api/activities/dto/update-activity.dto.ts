import { PartialType } from '@nestjs/mapped-types';
import { IsUrl, IsNotEmpty, IsOptional } from 'class-validator';
import { CreateActivityDto } from './create-activity.dto';

export class UpdateActivityDto extends PartialType(CreateActivityDto) {
  @IsOptional()
  @IsUrl()
  mapUrl?: string;

  @IsOptional()
  @IsNotEmpty()
  typeId?: number;
}
