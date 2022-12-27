import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}
  createTodo(title: string, description: string) {
    return this.prisma.todo.create({
      data: { title, description },
    });
  }
}
