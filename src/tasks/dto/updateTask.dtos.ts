import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  description: string;
  epic: string;
}
