import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsNumber()
  travel_id: number;

  @IsNotEmpty()
  @IsNumber()
  country_id: number;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsDate()
  start_date: Date;

  @IsNotEmpty()
  @IsDate()
  end_date: Date;
}
