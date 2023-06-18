import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCountryDto {
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  @IsString()
  iso3: string;

  @IsNotEmpty()
  @IsString()
  numeric_code: string;

  @IsNotEmpty()
  @IsString()
  continent_code: string;
}
