import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeActivityDto } from './create-type-activity.dto';

export class UpdateTypeActivityDto extends PartialType(CreateTypeActivityDto) {}
