import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { DynamoDBModule } from '../config/aws-dynamodb.module'; // Import DynamoDBModule

@Module({
  imports: [DynamoDBModule], 
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
