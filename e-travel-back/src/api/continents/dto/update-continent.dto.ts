import { IsOptional, IsString } from 'class-validator';

export class UpdateContinentDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  name?: string;
}
