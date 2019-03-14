import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFormComponent } from './../books/components/book-form/book-form.component';
import { BookListComponent } from './../books/components/book-list/book-list.component';

const routes: Routes = [
  {
    component: BookListComponent,
    path: ''
  },
  {
    component: BookFormComponent,
    path: 'new'
  },
  {
    component: BookFormComponent,
    path: 'edit/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
