import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Book {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  price: string;

  @IsEmail()
  email: string;

  @IsNumber()
  userId: number;
}
