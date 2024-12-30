import { Injectable} from '@nestjs/common';
import { DynamoDBService } from '../config/aws-dynamodb.config';
import { PutCommand, GetCommand, UpdateCommand, DeleteCommand , ScanCommand } from '@aws-sdk/lib-dynamodb';
import { CreateBookDto } from './books.dto'

@Injectable()
export class BooksService {
  private tableName = 'Books';

  constructor(private readonly dynamoDBService: DynamoDBService) {}

  // Updated addBook method using CreateBookDto
  async addBook(book: CreateBookDto) {
    try {
      await this.dynamoDBService.getClient().send(
        new PutCommand({
          TableName: this.tableName,
          Item: book,
        }),
      );
      return { message: 'Book added successfully!' };
    } catch (error) {
      throw new Error(`Error adding book: ${error.message}`);
    }
  }

  async getBook(key: string) {
    try {
      const result = await this.dynamoDBService.getClient().send(
        new GetCommand({
          TableName: this.tableName,
          Key: { S: key },
        }),
      );
      return result.Item;
    } catch (error) {
      throw new Error(`Error retrieving book: ${error.message}`);
    }
  }

  async deleteBook(key: string) {
    try {
      await this.dynamoDBService.getClient().send(
        new DeleteCommand({
          TableName: this.tableName,
          Key: { S: key },
        }),
      );
      return { message: 'Book deleted successfully!' };
    } catch (error) {
      throw new Error(`Error deleting book: ${error.message}`);
    }
  }

  async borrowBook(bookId: string, userId: string) {
    try {
      const result = await this.dynamoDBService.getClient().send(
        new UpdateCommand({
          TableName: this.tableName,
          Key: { S: bookId },
          UpdateExpression: 'SET isBorrowed = :isBorrowed, borrowedBy = :borrowedBy',
          ExpressionAttributeValues: {
            ':isBorrowed': true,
            ':borrowedBy': userId,
          },
          ReturnValues: 'ALL_NEW',
        }),
      );

      if (result.Attributes?.isBorrowed) {
        return { message: `Book borrowed by user ${userId}` };
      } else {
        return { message: 'Book is already borrowed.' };
      }
    } catch (error) {
      throw new Error(`Error borrowing book: ${error.message}`);
    }
  }

  async returnBook(bookId: string, userId: string) {
    try {
      const result = await this.dynamoDBService.getClient().send(
        new UpdateCommand({
          TableName: this.tableName,
          Key: { S: bookId },
          UpdateExpression: 'SET isBorrowed = :isBorrowed, borrowedBy = :borrowedBy',
          ExpressionAttributeValues: {
            ':isBorrowed': false,
            ':borrowedBy': '',
            ':userId': userId, // Add this line to define :userId
          },
          ConditionExpression: 'borrowedBy = :userId', // Ensure that the book is being returned by the right user
          ReturnValues: 'ALL_NEW',
        }),
      );

      return { message: `Book returned by user ${userId}` };
    } catch (error) {
      throw new Error(`Error returning book: ${error.message}`);
    }
  }

  async getAllBooks() {
    try {
      const result = await this.dynamoDBService.getClient().send(
        new ScanCommand({
          TableName: this.tableName,
        }),
      );
      return result.Items; 
    } catch (error) {
      throw new Error(`Error retrieving books: ${error.message}`);
    }
  }
}
