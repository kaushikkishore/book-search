import { IsInt, IsString } from "class-validator";

export class RetrieveBookDto {
    title: string;
    isbn: string;
    pageCount: number;
    published: publish;
    thumbnailUrl: string;
    shortDescription: string;
    longDescription: string;
    status: string;
    authors: string[];
    categories: string[];
}

class publish {
    date: Date;
    price: number;
    currency: string;
}