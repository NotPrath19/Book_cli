import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Books{
id: number;
title: string;
author: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

 
  public addBook(book:any)
  {
   return this.http.post('http://localhost:8080/books/add',book);
  }

    public getBooks():Observable<Books[]>
    {
      return this.http.get<Books[]>('http://localhost:8080/books/get');
    }
    public getBook(id:any):Observable<Books>
    {
      return this.http.get<Books>('http://localhost:8080/books/getbook/'+id)
    }
    public deleteBook(id:any)
    {
       return this.http.post('http://localhost:8080/books/delete',id);
    }
   
  
}
