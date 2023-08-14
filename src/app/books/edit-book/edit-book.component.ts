import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookDetails:Book = {
    bookId: NaN,
    title: '',
    author: '',
    genre: '',
    publicationDate: new Date(),
    imageUrl: ''
  }

  //Inject the get book service that will fill the edit book form with data from db & route back to book page
  constructor(private route: ActivatedRoute, private bookService:BooksService, 
    private router:Router){}

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next:(params)=>{
        let bookid =params.get('bookId');
        let bookidnum = Number(bookid); // Converts string value to number
        //If id not undefined call the api
        if(bookidnum){
          this.bookService.getBook(bookidnum)
          .subscribe({
            next:(response)=>{
              this.bookDetails=response;
            }
          });
        }
      }
    })
  }

  updateBook(){
    this.bookService.updateBook(this.bookDetails.bookId, this.bookDetails)
    .subscribe({
      next:(response)=>{
        this.router.navigate(['']); 
      }
    });
  }

}
