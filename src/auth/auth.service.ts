import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';
import { User } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signIn(dto: User) {
    try {
      const email = dto.email;
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new UnauthorizedException(`Email wrong`);
      }

      const isMatchesPassword = await argon2.verify(
        user.password,
        dto.password,
      );

      if (!isMatchesPassword) {
        throw new UnauthorizedException(`Password wrong`);
      }
      delete user.password;
      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async signUp(dto: User) {
    try {
      const password = dto.password;
      const hash = await argon2.hash(password);
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          email: dto.email,
          password: hash,
        },
      });
      delete user.password;
      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
