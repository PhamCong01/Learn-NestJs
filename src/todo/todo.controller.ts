import { Body, Controller, Post, Req } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDto } from 'src/dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post('new')
  createTodo(@Body() dto: TodoDto) {
    const { title, description } = dto;
    return this.todoService.createTodo(title, description);
  }
}
