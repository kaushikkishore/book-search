export interface Book {
  title: string;
  isbn: string;
  pageCount: number;
  published: Date;
  price: number;
  currency: string;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
}
