import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private booksService:BooksService){}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.booksService.getAllBooks()
    .subscribe({
      next: (books) => {
        this.books=books;
      },
      error:(response) => {
        console.log(response);
      }
    })
  }

  deleteBook(bookId:number){
    console.log(bookId)
    this.booksService.deleteBook(bookId)
    .subscribe({
      next:(response)=>{
        this.getAllBooks(); // Calls the getAllBooks method which will have the page reload & display updated book list 
      }
    });
  }

}
