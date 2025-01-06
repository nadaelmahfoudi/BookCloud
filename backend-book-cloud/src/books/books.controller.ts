import { Controller, Post, Get, Delete, Patch, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    async addBook(@Body() book: { S: string; title: string; description: string; author: string; publishedYear: number }) {
        return this.booksService.addBook(book);
    }

    @Get(':bookId')  
    async getBook(@Param('bookId') bookId: string) {  
        return this.booksService.getBook(bookId);  
    }

    // @Delete(':id')
    // async deleteBook(@Param('id') id: string) {
    //     return this.booksService.deleteBook(id);
    // }

    // Borrow a book
    // @Post(':id/borrow')
    // async borrowBook(@Param('id') id: string, @Body('userId') userId: string) {
    //     return this.booksService.borrowBook(id, userId);
    // }

    // Return a borrowed book
    // @Post(':id/return')
    // async returnBook(@Param('id') id: string, @Body('userId') userId: string) {
    //     return this.booksService.returnBook(id, userId);
    // }
    
    @Get()
    async getAllBooks() {
      return this.booksService.getAllBooks();
    }

    @Patch(':S')
    async updateBook(
      @Param('S') S: string, 
      @Body() updatedFields: Partial<{ title: string; description: string; author: string; publishedYear: number }>,
    ) {
      return this.booksService.updateBook(S, updatedFields); 
    }
    
}
