import { Injectable } from '@nestjs/common';
import { CreateBookDto, UpdateBookDto } from '../dto/book.dto';

@Injectable()
export class BooksService {
  private books = [];

  create(createBookDto: CreateBookDto) {
    // Implement logic to create a book
  }

  findAll() {
    // Implement logic to fetch all books
  }

  findOne(id: string) {
    // Implement logic to fetch a single book by id
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    // Implement logic to update a book's title by id
  }

  softDelete(id: string) {
    // Implement logic to soft delete a book by id
  }
}
