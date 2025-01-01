import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Book, bookSchema } from './books.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: bookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService]
})
export class BooksModule {}
