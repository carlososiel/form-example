import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookServiceService } from './services/book-service.service';

@NgModule({
  declarations: [BookFormComponent, BookListComponent],
  providers: [BookServiceService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class BooksModule { }
