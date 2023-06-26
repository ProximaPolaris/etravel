import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeActivityDto {
  @IsNotEmpty()
  @IsString()
  label: string;
}
