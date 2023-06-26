import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateTravelDto {
  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;
}
