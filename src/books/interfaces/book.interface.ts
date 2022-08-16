export interface Book {
    title: string,
    isbn: string,
    pageCount: number, 
    published: publish,
    thumbnailUrl: string,
    shortDescription: string,
    longDescription: string,
    status: string,
    authors: string[],
    categories: string[],
}

type publish = {
    date: Date,
    price: number,
    currency: string,
}