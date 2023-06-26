import { IsNotEmpty, IsString } from 'class-validator';

export class CreateContinentDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
