import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReaderComponent } from './components/reader/reader.component';
import { AuthorComponent } from './components/author/author.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SearchbookComponent } from './components/searchbook/searchbook.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    AuthorComponent,
    HomepageComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    SearchbookComponent,
    ShowBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
