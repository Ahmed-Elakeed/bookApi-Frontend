import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExpenseComponent } from './component/expense/expense.component';
import { BookComponent } from './component/book/book.component';
import { AddExpenseComponent } from './component/expense/add-expense/add-expense.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ExpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
