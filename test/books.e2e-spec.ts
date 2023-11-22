import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('BooksController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/books (POST)', () => {
    // Implement test case for creating a book
  });

  it('/books (GET)', () => {
    // Implement test case for fetching all books
  });

  it('/books/:id (GET)', () => {
    // Implement test case for fetching a single book by id
  });

  it('/books/:id (PUT)', () => {
    // Implement test case for updating a book's title by id
  });

  it('/books/:id (DELETE)', () => {
    // Implement test case for soft deleting a book by id
  });

  afterAll(async () => {
    await app.close();
  });
});
