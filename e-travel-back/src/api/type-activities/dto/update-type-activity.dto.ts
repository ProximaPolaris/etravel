import { IsOptional, IsString } from 'class-validator';

export class UpdateTypeActivityDto {
  @IsOptional()
  @IsString()
  label?: string;
}
