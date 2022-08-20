import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { text } from 'express';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  isbn: string;

  @Prop()
  pageCount: number;

  @Prop()
  published: Date;

  @Prop()
  price: number;

  @Prop()
  currency: string;

  @Prop()
  thumbnailURL: string;

  @Prop()
  shortDescription: string;

  @Prop()
  longDescription: string;

  @Prop()
  status: string;

  @Prop([String])
  authors: string[];

  @Prop([String])
  categories: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
