import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { Book } from '../entity/book';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  isEditSelected:Boolean=false;
  book:Book=new Book();
  listOfBooks:Book[]=[];

  showListBooks(){
    let loggedInUser=sessionStorage.getItem('email');
    this.bookService.showListOfAuthorBook(`${loggedInUser}`).subscribe(
      resp=>{
        console.log(resp);
        this.listOfBooks=resp;
      },err=>{
        console.log(err);
        alert("Error")
      }
    )
  }

  deleteBook(book:Book,index:number){
    this.bookService.deleteBookService(book).subscribe(
      resp=>{
        alert("Book deleted successfully");
        this.listOfBooks.splice(index,1);
      },err=>{
        alert("Error")
      }
    )
  }

  showListBook(){
    this.isEditSelected=false;
    this.showListBooks();
    this.router.navigate(['showBooks'])
  }

  editBook(book:Book){
    this.isEditSelected=true;
    this.bookService.getBookById(book.bookId).subscribe(
      resp=>{
        console.log(resp);
        this.book=resp;
      },err=>{
        alert("Error")
      }
    )
  }

  updateBook(){
    this.bookService.updateBookAuthor(this.book).subscribe(
      resp=>{
        alert("Book Updated Successfully");
      },err=>{
        alert("Error")
      }
    )
  }

  constructor(private bookService:BookService,private router:Router) { }

  ngOnInit(): void {
    this.showListBooks();
  }

}
