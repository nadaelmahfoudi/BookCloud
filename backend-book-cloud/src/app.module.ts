import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BooksModule } from './books/books.module';
import { DynamoDBModule } from './config/aws-dynamodb.module'; 

@Module({
  imports: [ConfigModule.forRoot(), DynamoDBModule, BooksModule], 
})
export class AppModule {}
