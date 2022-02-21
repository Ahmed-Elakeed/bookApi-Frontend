import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Expense } from 'src/app/model/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private _httpService:HttpClient) { }

  getAllExpenses():Observable<Expense[]>{
    return this._httpService.get<Expense[]>("http://localhost:8080/api/expense").pipe(
      map(response=>response)
    )
  }
  getExpenseById(id:number):Observable<Expense>{
    return this._httpService.get<Expense>("http://localhost:8080/api/expense/"+id).pipe(
      map(response=>response)
    )
  }
  addExpense(expense:Expense):Observable<Expense>{
    return this._httpService.post<Expense>("http://localhost:8080/api/expense",expense);
  }
  deleteExpenseById(id:number):Observable<any>{
    return this._httpService.delete("http://localhost:8080/api/expense/"+id);
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
