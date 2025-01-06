// import { Test, TestingModule } from '@nestjs/testing';
// import { BooksService } from './books.service';
// import { DynamoDBService } from '../config/aws-dynamodb.config';
// import { CreateBookDto } from './books.dto';
// import { PutCommand } from '@aws-sdk/lib-dynamodb';

// // Mock de DynamoDBService
// class MockDynamoDBService {
//   getClient() {
//     return {
//       send: jest.fn(),
//     };
//   }
// }

// describe('BooksService', () => {
//   let service: BooksService;
//   let dynamoDBService: MockDynamoDBService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [
//         BooksService,
//         { provide: DynamoDBService, useClass: MockDynamoDBService },
//       ],
//     }).compile();

//     service = module.get<BooksService>(BooksService);
//     dynamoDBService = module.get<DynamoDBService>(DynamoDBService) as any;
//   });

//   it('should be defined', () => {
//     expect(service).toBeDefined();
//   });

//   describe('addBook', () => {
//     it('should add a book successfully', async () => {
//       const createBookDto: CreateBookDto = {
//         S: '1',
//         title: 'Test Book',
//         description: 'This is a test book',
//         author: 'Test Author',
//         publishedYear: 2025,
//       };
    
//       // Assurez-vous que la méthode mock résout avec succès
//       dynamoDBService.getClient().send.mockResolvedValueOnce({});
    
//       const result = await service.addBook(createBookDto);
//       expect(result).toEqual({ message: 'Book added successfully!' });
    
//       // Vérifiez que 'send' a bien été appelé avec les bons arguments
//       expect(dynamoDBService.getClient().send).toHaveBeenCalledWith(
//         expect.objectContaining({
//           input: expect.objectContaining({
//             TableName: 'Books',
//             Item: expect.objectContaining({
//               S: '1',
//               title: 'Test Book',
//               description: 'This is a test book',
//               author: 'Test Author',
//               publishedYear: 2025,
//             }),
//           }),
//         }),
//       );
//     });
    
//     it('should throw an error if adding book fails', async () => {
//       const createBookDto: CreateBookDto = {
//         S: '1',
//         title: 'Test Book',
//         description: 'This is a test book',
//         author: 'Test Author',
//         publishedYear: 2025,
//       };
    
//       // Simulez une erreur avec mockRejectedValueOnce
//       dynamoDBService.getClient().send.mockRejectedValueOnce(new Error('Failed to add book'));
    
//       // Testez si l'erreur est bien rejetée avec le bon message
//       await expect(service.addBook(createBookDto)).rejects.toThrow('Error adding book: Failed to add book');
//     });
    
//   });
// });
