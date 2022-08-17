import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { title } from 'process';
import { QueryBookDto } from './dto/query.book.dto';
// import { Book } from './interfaces/book.interface';
import { BookDocument, Book } from './schemas/book.schema';

import data from './data/db';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  private readonly books: Book[] = [];
  async find(query: QueryBookDto): Promise<void> {}
}
