import { IsOptional, IsString, IsNumber, IsDate } from 'class-validator';

export class UpdateDestinationDto {
  @IsOptional()
  @IsNumber()
  travel_id?: number;

  @IsOptional()
  @IsNumber()
  country_id?: number;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsDate()
  start_date?: Date;

  @IsOptional()
  @IsDate()
  end_date?: Date;
}
