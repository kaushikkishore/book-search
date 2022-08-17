import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];
  async find(): Promise<Book[]> {
    return this.books;
  }
}
