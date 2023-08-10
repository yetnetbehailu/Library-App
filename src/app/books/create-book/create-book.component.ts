import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})

// Binds the create book form inputs to the book model
export class CreateBookComponent implements OnInit {
  createBookRequest:Book = {
    bookId: NaN,
    title: '',
    author: '',
    genre: '',
    publicationDate: new Date(),
    imageUrl: ''
  };

  constructor() {}

  ngOnInit(): void {
  
  }

  // Populates the createBookRequest variable
  createBook(){
    console.log(this.createBookRequest);
  }

}
