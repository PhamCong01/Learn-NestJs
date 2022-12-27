import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TodoModule } from './todo/todo.module';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [AuthModule, TodoModule, BooksModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
