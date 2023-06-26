import { IsOptional, IsString, IsNumber } from 'class-validator';

export class UpdateLodgingDto {
  @IsOptional()
  @IsNumber()
  travel_id?: number;

  @IsOptional()
  @IsString()
  address?: string;
}
