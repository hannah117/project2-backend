import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, MinLength } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  description: string;

  epic: string;

  @Type(() => Date)
  @IsDate()
  dueDate: Date;
}
