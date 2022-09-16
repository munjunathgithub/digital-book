import { Component, OnInit } from '@angular/core';
import { Book } from '../entity/book';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  book:Book=new Book();
  authorName:string="";
  constructor() { }

  ngOnInit(): void {
  }

  saveBook(){
      }


}
