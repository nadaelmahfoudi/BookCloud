import { Injectable } from '@nestjs/common';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

@Injectable()
export class DynamoDBService {
    private dynamoDBClient: DynamoDBDocumentClient;

    constructor() {
        const client = new DynamoDBClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
            },
        });

        // Use DynamoDBDocumentClient for high-level operations
        this.dynamoDBClient = DynamoDBDocumentClient.from(client);
    }

    getClient(): DynamoDBDocumentClient {
        return this.dynamoDBClient;
    }
}
