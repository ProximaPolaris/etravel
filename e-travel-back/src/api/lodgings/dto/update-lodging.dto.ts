import { PartialType } from '@nestjs/mapped-types';
import { CreateLodgingDto } from './create-lodging.dto';

export class UpdateLodgingDto extends PartialType(CreateLodgingDto) {}
