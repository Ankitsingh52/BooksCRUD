import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.schema';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    create(@Body() book: Partial<Book>) {
        return this.booksService.create(book);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.booksService.findOne(id);
    }

    @Get()
    findAll() {
        return this.booksService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() book: Partial<Book>) {
        return this.booksService.update(id, book);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.booksService.delete(id);
    }

}
