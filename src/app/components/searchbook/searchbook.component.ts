import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { Book } from '../entity/book';


@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit {

  book:Book=new Book();
  listBook:Book[]=[];

  search(){
    let obj = Object.fromEntries(Object.entries(this.book).filter(([_, key]) => key != ""));
    this.bookService.searchBook0(this.book).subscribe(
      resp=>{
        this.listBook=resp as Book[];
        if(this.listBook.length==0){
          alert("No data found");
        }
        console.log(this.listBook);
      },error=>{
        console.log(error);
        alert("Error fetching data")
      }
    )
  }
  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

}
