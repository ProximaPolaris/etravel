import { IsOptional, IsInt, IsDate } from 'class-validator';

export class UpdateCalendarDto {
  @IsOptional()
  @IsInt()
  travel_id?: number;

  @IsOptional()
  @IsDate()
  date?: Date;

  @IsOptional()
  @IsInt()
  activity_id?: number;
}
