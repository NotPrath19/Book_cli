import { Component, OnInit } from '@angular/core';
import { BookService, Books } from 'src/app/Services/book.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Title', 'Author','Update','Delete'];
  books:Books[]=[];
  datasource= new MatTableDataSource<Books>();
constructor(private bookService:BookService,private router:Router){}
ngOnInit()  
{
  this.bookService.getBooks().subscribe(data =>(this.books = data,
    this.datasource = new MatTableDataSource(this.books)))  
}
delete(id:any)
{
  console.log(id);
  this.bookService.deleteBook(id).subscribe(data=>(console.log(data)))
  this.router.navigate(['/viewbook'])
}

}
