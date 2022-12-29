import { Injectable } from '@nestjs/common';
import { Book } from 'src/dto/book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  async createBooks(dto: Book) {
    try {
      const book = await this.prisma.books.create({
        data: {
          name: dto.name,
          price: dto.price,
          email: dto.email,
          userId: dto.userId,
        },
      });
      return book;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const books = await this.prisma.books.findMany();
      return res.json(books);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
