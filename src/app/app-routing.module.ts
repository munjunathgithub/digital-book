import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ReaderComponent } from './components/reader/reader.component';
import { SearchbookComponent } from './components/searchbook/searchbook.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{ path: "signin", component: SigninComponent }, 
{ path: "", component: HomepageComponent }, 
{ path: "reader", component: ReaderComponent }, 
{ path: "author", component: AuthorComponent },
{path:"signup",component:SignupComponent},
{path:"searchBook",component:SearchbookComponent},
{path:"showBooks",component:ShowBooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
