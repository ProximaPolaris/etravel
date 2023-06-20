import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLodgingDto {
  @IsNotEmpty()
  @IsNumber()
  travel_id: number;

  @IsNotEmpty()
  @IsString()
  address: string;
}
