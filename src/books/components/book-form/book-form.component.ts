import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { BookServiceService } from './../../services/book-service.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  edit = false;

  constructor(private fb: FormBuilder, private bookService: BookServiceService, private router: Router, private route: ActivatedRoute) {
    this.bookForm = this.fb.group({
      id: null,
      title: [null, Validators.required],
      author: [null, Validators.required],
      year: null,
      isbn: null,
    });

    this.route.params.subscribe(params => {
      if (params.id) {
        this.edit = true;
        const book = this.bookService.get(params.id);
        this.bookForm.patchValue(book[0]);
        console.log(this.bookForm.getRawValue());
      }
    });
  }

  ngOnInit() {
  }

  save() {
    const book = this.bookForm.getRawValue();
    if (!this.edit) {
      delete book.id;
      this.bookService.create(book);
    } else {
      this.bookService.update(book);
    }
    this.router.navigateByUrl('/');
  }
}
