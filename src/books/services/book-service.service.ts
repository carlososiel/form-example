import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { environment } from '../../environments/environment';
import { IBook } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  create(book: IBook): void {
    const books = this.getAll();
    const id = books ? Number(books[books.length - 1].id) + 1  : 1;
    book.id = String(id);
    books.push(book);
    localStorage.setItem(environment.sessionBooks, JSON.stringify(books));
  }

  update(book: IBook): void {
    const books = this.getAll();
    const pos = _.findIndex(books, { id: book.id });
    books.splice(pos, 1);
    books.splice(pos, 0, book);
    localStorage.setItem(environment.sessionBooks, JSON.stringify(books));
  }

  getAll(): IBook[] {
    const books = JSON.parse(localStorage.getItem(environment.sessionBooks));
    return books ? books : [];
  }

  get(id: string): IBook {
    const books = this.getAll();
    const book = _.filter(books, { id });
    return book;
  }

  delete(id: string): void {
    const books = this.getAll();
    const pos = _.findIndex(books, { id });
    books.splice(pos, 1);
    localStorage.setItem(environment.sessionBooks, JSON.stringify(books));
  }
}
