import { Body, Controller, Get, Post, Request, Response } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/dto/book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Post('new')
  async createBooks(@Body() dto: Book) {
    try {
      return await this.booksService.createBooks(dto);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  @Get()
  async getAll(@Request() req, @Response() res) {
    try {
      await this.booksService.getAll(req, res);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
