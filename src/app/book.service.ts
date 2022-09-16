import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Book } from './components/entity/book';
import {environment} from 'src/environments/environment';

const BASE_URL_AUTHOR="http://localhost:9090";
const BASE_URL_READER="http://localhost:9091";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  saveBook(book:Book){
    return this.http.post(BASE_URL_AUTHOR+"/book/saveBook",book);
  }

  showListOfAuthorBook(email:string){
    return this.http.get<Book[]>(BASE_URL_AUTHOR+"/book/showAllBook/"+`${email}`);
  }

  deleteBookService(book:Book){
    return this.http.delete(BASE_URL_AUTHOR+"/book/getBookById/"+book.price);
  }

  searchBook(book:any){
    return this.http.get(BASE_URL_AUTHOR+"/book/getBookById/"+book.price);
  }

  searchBook0(book:Book){
    return this.http.get(BASE_URL_AUTHOR+"/book/getBookById/8");
  }
  getBookById(bookId:number){
    return this.http.get<Book>(BASE_URL_READER+"/api/v1/digitalbooks/searchBookById/"+`${bookId}`)
  }

  updateBookAuthor(book:Book){
    return this.http.patch<Book>(BASE_URL_AUTHOR+"/book/updateBook",book);

  }

}
