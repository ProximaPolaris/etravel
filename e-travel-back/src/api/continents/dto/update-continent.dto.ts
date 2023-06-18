import { PartialType } from '@nestjs/mapped-types';
import { CreateContinentDto } from './create-continent.dto';

export class UpdateContinentDto extends PartialType(CreateContinentDto) {}
