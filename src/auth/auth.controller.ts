import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signUp(@Body() dto: User) {
    return this.authService.signUp(dto);
  }

  @Post('signin')
  signIn(@Body() dto: User) {
    return this.authService.signIn(dto);
  }
}
