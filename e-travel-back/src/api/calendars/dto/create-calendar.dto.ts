import { IsInt, IsNotEmpty, IsDate } from 'class-validator';

export class CreateCalendarDto {
  @IsInt()
  @IsNotEmpty()
  travel_id: number;

  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsInt()
  @IsNotEmpty()
  activity_id: number;
}
