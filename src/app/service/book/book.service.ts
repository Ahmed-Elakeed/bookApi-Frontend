import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Book } from 'src/app/model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpService:HttpClient) { }

  getAllBooks():Observable<any>{
    return this._httpService.get("http://localhost:8080/api/book").pipe(
     catchError(this.handleError)
    );
  }
  getBookById(id:string):Observable<any>{
    return this._httpService.get("http://localhost:8080/api/book/"+id).pipe(
      catchError(this.handleError)
    )
  }
  addBook(book:Book){
    if(book.id){
        return this._httpService.put("http://localhost:8080/api/book/"+book.id,book).pipe(
          catchError(this.handleError)
        );
    }else{
      return this._httpService.post("http://localhost:8080/api/book",book).pipe(
        catchError(this.handleError)
      );
    }
  }
  deleteBook(id:string){
    return this._httpService.delete("http://localhost:8080/api/book/"+id);
    }



  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
