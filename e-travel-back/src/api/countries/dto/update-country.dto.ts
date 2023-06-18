import { IsOptional, IsString } from 'class-validator';

export class UpdateCountryDto {
  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  full_name?: string;

  @IsOptional()
  @IsString()
  iso3?: string;

  @IsOptional()
  @IsString()
  numeric_code?: string;

  @IsOptional()
  @IsString()
  continent_code?: string;
}
