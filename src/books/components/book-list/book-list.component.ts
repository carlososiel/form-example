import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IBook } from '../../interfaces/book.interface';
import { BookServiceService } from './../../services/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: IBook[];

  constructor(private bookService: BookServiceService, private router: Router) {
    this.books = this.bookService.getAll();
  }

  new(id?: string) {
    if (id) {
      this.router.navigateByUrl('/edit/' + id);
    } else {
      this.router.navigateByUrl('/new');
    }
  }

  delete(id: string) {
    this.bookService.delete(id);
    this.books = this.bookService.getAll();
  }
}
