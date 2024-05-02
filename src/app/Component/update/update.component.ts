import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService, Books } from 'src/app/Services/book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  constructor(private bookService:BookService,private route:ActivatedRoute,private router:Router){}
  id = 0;
  book: Books = { id: 0, title: '', author: '' };
  bookForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl()
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBook(this.id).subscribe((data) => {
      this.book = {id:data.id,title:data.title,author:data.author};
    });
 }
 update()
 {
 this.bookService.addBook(this.bookForm.value).subscribe((data)=>console.log(data),(error)=>(console.error)); 
 console.log(this.bookForm.value)  
  this.router.navigate(["/viewbook"])
}

}
 
