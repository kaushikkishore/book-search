import { Controller, Get, Param, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { QueryBookDto } from './dto/query.book.dto';
import { Book } from './interfaces/book.interface';
import { Moment } from 'moment';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('/search')
  async find(@Query() query: QueryBookDto): Promise<Book[]> {
    // console.log(`Date ${Moment.(query.date)}`);
    return this.booksService.find();
  }
}
