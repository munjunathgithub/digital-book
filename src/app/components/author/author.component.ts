import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../entity/book';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  book:Book=new Book();
  authorName:string="";

  saveBook(){
    console.log(this.book);
    let author=sessionStorage.getItem('username');
    let authorEmail=sessionStorage.getItem('email');
    this.book.authorEmail=`${authorEmail}`;
    this.book.authorName=`${author}`;

    this.bookservice.saveBook(this.book).subscribe(
      resp=>{
        console.log(resp);
        alert("Book Saved successfully");
      },
      err=>{
        console.log(err);
      }
    )
  }

  showListOfBookOfAuthor(){

  }

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
  }

}
