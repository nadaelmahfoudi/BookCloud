import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CreateBookDto } from './books.dto';

class MockBooksService {
  // Définir le type des méthodes mockées pour correspondre aux méthodes de BooksService
  addBook = jest.fn();
  getBook = jest.fn();
  getAllBooks = jest.fn();
  updateBook = jest.fn();
}

describe('BooksController', () => {
  let controller: BooksController;
  let service: MockBooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        { provide: BooksService, useClass: MockBooksService },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService) as unknown as MockBooksService;  // Type casting explicite
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('addBook', () => {
    it('should call addBook on the service and return the correct result', async () => {
      const createBookDto: CreateBookDto = {
        S: '1',
        title: 'Test Book',
        description: 'This is a test book',
        author: 'Test Author',
        publishedYear: 2025,
      };

      const response = { message: 'Book added successfully!' };

      // Simuler la réponse du service
      service.addBook.mockResolvedValue(response);

      const result = await controller.addBook(createBookDto);
      expect(result).toEqual(response);
      expect(service.addBook).toHaveBeenCalledWith(createBookDto);
    });
  });

  describe('getBook', () => {
    it('should call getBook on the service and return the correct result', async () => {
      const bookId = '1';
      const book = { S: '1', title: 'Test Book', author: 'Test Author' };

      // Simuler la réponse du service
      service.getBook.mockResolvedValue(book);

      const result = await controller.getBook(bookId);
      expect(result).toEqual(book);
      expect(service.getBook).toHaveBeenCalledWith(bookId);
    });
  });

  describe('getAllBooks', () => {
    it('should call getAllBooks on the service and return the correct result', async () => {
      const books = [
        { S: '1', title: 'Test Book 1', author: 'Test Author 1' },
        { S: '2', title: 'Test Book 2', author: 'Test Author 2' },
      ];

      // Simuler la réponse du service
      service.getAllBooks.mockResolvedValue(books);

      const result = await controller.getAllBooks();
      expect(result).toEqual(books);
      expect(service.getAllBooks).toHaveBeenCalled();
    });
  });

  describe('updateBook', () => {
    it('should call updateBook on the service and return the correct result', async () => {
      const S = '1';
      const updatedFields = { title: 'Updated Test Book' };
      const updatedBook = { S: '1', title: 'Updated Test Book', author: 'Test Author' };

      // Simuler la réponse du service
      service.updateBook.mockResolvedValue(updatedBook);

      const result = await controller.updateBook(S, updatedFields);
      expect(result).toEqual(updatedBook);
      expect(service.updateBook).toHaveBeenCalledWith(S, updatedFields);
    });
  });
});
