import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  async createBooks(name, price) {
    try {
      const book = await this.prisma.books.create({
        data: {
          name,
          price,
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
