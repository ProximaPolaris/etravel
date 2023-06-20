import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsInt()
  @IsNotEmpty()
  type_id: number;

  @IsInt()
  @IsNotEmpty()
  travel_id: number;

  @IsString()
  @IsNotEmpty()
  map_url: string;
}
