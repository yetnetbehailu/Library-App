import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  // Api service connection methods
  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl + '/api/books');
  }

  createBook(createBookRequest: Book): Observable<Book>{
    createBookRequest.bookId= 0;
    return this.http.post<Book>(this.baseApiUrl + '/api/books', createBookRequest);
  }

  getBook(bookId:number):Observable<Book>{
    return this.http.get<Book>(this.baseApiUrl + '/api/books/' + bookId);
  }

  updateBook(bookId:number, updateBookRequest:Book):Observable<Book>{
    return this.http.put<Book>(this.baseApiUrl + '/api/books/' + bookId, updateBookRequest)
  }

  deleteBook(bookId:number):Observable<Book>{
    return this.http.delete<Book>(this.baseApiUrl + '/api/books/' + bookId ); 
  }
}
