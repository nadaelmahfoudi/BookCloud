import { Module } from '@nestjs/common';
import { DynamoDBService } from './aws-dynamodb.config';

@Module({
  providers: [DynamoDBService],
  exports: [DynamoDBService], 
})
export class DynamoDBModule {}
