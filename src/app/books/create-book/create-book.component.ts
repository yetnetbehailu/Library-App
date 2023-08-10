import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

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

  // Inject the CreateBook service which will communicate with corresponding .net api app
  constructor(private BookService: BooksService, private router: Router) {}

  ngOnInit(): void {
  
  }

  // Populates the createBookRequest variable passing the request to the service
  createBook(){
    this.BookService.createBook(this.createBookRequest)
    .subscribe({
      next:(book)=> {
        this.router.navigate(['']);
      }
    });
  }

}
