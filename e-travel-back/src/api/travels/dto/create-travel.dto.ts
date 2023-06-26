import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTravelDto {
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
