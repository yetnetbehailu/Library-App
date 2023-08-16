import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CreateBookComponent } from './books/create-book/create-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';

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
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
