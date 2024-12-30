import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    async addBook(@Body() book: { S: string; title: string; description: string; author: string; publishedYear: number }) {
        return this.booksService.addBook(book);
    }

    @Get(':id')
    async getBook(@Param('id') id: string) {
        return this.booksService.getBook(id);
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: string) {
        return this.booksService.deleteBook(id);
    }

    // Borrow a book
    @Post(':id/borrow')
    async borrowBook(@Param('id') id: string, @Body('userId') userId: string) {
        return this.booksService.borrowBook(id, userId);
    }

    // Return a borrowed book
    @Post(':id/return')
    async returnBook(@Param('id') id: string, @Body('userId') userId: string) {
        return this.booksService.returnBook(id, userId);
    }
}
