import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

const routes: Routes = [
  {
    path:'',
    component:BooksComponent
  },
  {
    path:'books/create',
    component:CreateBookComponent
  },
  {
    path:'books/edit/:bookId',
    component:EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
