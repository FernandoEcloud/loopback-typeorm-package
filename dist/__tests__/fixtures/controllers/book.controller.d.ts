import { Book } from '../typeorm-entities/book.entity';
export declare class BookController {
    constructor();
    private bookRepo;
    create(data: Omit<Book, 'id'>): Promise<Book>;
    findById(id: string): Promise<Book | undefined>;
}
