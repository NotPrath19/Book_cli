import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService,Books } from 'src/app/Services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})

export class AddbookComponent {
  constructor(private bookService:BookService){}
  book = new FormGroup( {title: new FormControl(''),
 author: new FormControl('')})
 
 
 saveBook()
{
  console.log(this.book.value);
  this.bookService.addBook((this.book.value)).subscribe(
  (data)=>console.log(data),(error)=>
  console.log(error)
 );
}

}

