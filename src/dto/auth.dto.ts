import { IsArray, IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class AuthDto {
  name: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsStrongPassword()
  password: string;

  books?: string[];
}
