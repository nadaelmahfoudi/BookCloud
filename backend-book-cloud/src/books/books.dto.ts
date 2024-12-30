import { IsString, IsNumber } from 'class-validator';

export class CreateBookDto {
  @IsString()
  S: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  author: string;

  @IsNumber()
  publishedYear: number;
}
