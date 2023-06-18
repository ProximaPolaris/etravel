import { IsOptional, IsInt, IsString } from 'class-validator';

export class UpdateActivityDto {
  @IsOptional()
  @IsInt()
  type_id?: number;

  @IsOptional()
  @IsInt()
  travel_id?: number;

  @IsOptional()
  @IsString()
  map_url?: string;
}
