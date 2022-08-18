import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryBookDto } from './dto/query.book.dto';
import { Book as IBook } from './interfaces/book.interface';
import { BookDocument, Book } from './schemas/book.schema';

import * as moment from 'moment';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  private readonly books: Book[] = [];
  async find(query: QueryBookDto): Promise<IBook[]> {
    const filter = this.getQuery(query);
    const books: IBook[] = await this.bookModel.find(filter);
    console.log(`Books count ${books.length}`);
    return books;
  }

  getQuery(query: QueryBookDto) {
    const filter: any = {};

    if (query.author) {
      filter.authors = query.author;
    }

    if (query.category) {
      filter.categories = query.category;
    }

    // To handle all type of dates one needs to handle the year, month, day and Hour, minutes, seconds
    // This is little tricky and requires a effort to solve this. Skipping the date query for now.
    // This can be done by using query with the greater than start of the day and less than end of the day.
    //
    if (query.date) {
      filter.published = moment(query.date, 'YYYY-MM-DD');
    }

    if (query.isbn) {
      filter.isbn = query.isbn;
    }

    if (query.status) {
      filter.status = query.status.toUpperCase();
    }

    if (query.price) {
      filter.price = query.price;
    }

    return filter;
  }
}
