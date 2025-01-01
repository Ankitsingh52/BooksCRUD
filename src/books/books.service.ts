import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './books.schema';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(book: Partial<Book>): Promise<Book> {
    try {
        let newBook: Book = new this.bookModel(book);
        return newBook.save();
    }
    catch(err) {
        console.log(err);
        throw new Error('Some Error ocured while creating the Book');
    }
  }

  async findOne(id: string): Promise<Book> {
    try {
        const bookModelInst = this.bookModel;
        let bookInfo: Book = await bookModelInst.findById(id).exec();
        return bookInfo;
    }
    catch(err) {
        console.log(err);
        throw new Error('An Error occured while fetching the Book');
    }
  }

  async findAll(): Promise<Book[]> {
    try {
        const bookModelInst = this.bookModel;
        let booksList: Book [] = await bookModelInst.find().exec();
        return booksList;
    } catch (err) {
        console.log(err);
        throw new Error('An Error occured while fetching the Books List');
    }
  }

  async update(id: string, book: Partial<Book>): Promise<Book> {
    try{
        const bookModelInst = this.bookModel;
        let updatedBookInfo: Book = await bookModelInst.findByIdAndUpdate(id, book, { new: true }).exec();
        return updatedBookInfo;
    }
    catch(err) {
        console.log(err);
        throw new Error('An Error occured while updating the Book');
    }
  }

  async delete(id: string): Promise<Book> {
    try {
        const bookModelInst = this.bookModel;
        let deletedBook: any = await bookModelInst.findByIdAndDelete(id).exec();
        return deletedBook;
    }
    catch(err) {
        console.log(err);
        throw new Error('An Error occurred while deleting the Book');
    }
  }
}
