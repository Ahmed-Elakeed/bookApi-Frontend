import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  expenses:Expense[]=[];
  expense:Expense=new Expense();

  filters={
    keyword:'',
    sortBy:'Name'
  }
  
  constructor(private expenseService:ExpenseService) { }

  getAllExpenses():void{
    this.expenseService.getAllExpenses().subscribe(
      data=>this.expenses=data
    );
  }
  filter(){
    this.expenseService.getAllExpenses().subscribe(
      data=>this.expenses=this.filterExpenses(data)
    )
  }
  filterExpenses(expenses:Expense[]){
    return expenses.filter((e)=>{
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase());
    }).sort((a,b)=>{
      if(this.filters.sortBy==='Name'){
        return a.expense.toLowerCase() < b.expense.toLowerCase() ? -1:1;
      }else{
        return a.amount>b.amount ? -1:1;
      }
    })
  }
  ngOnInit(): void {
    this.getAllExpenses();
  }

}
