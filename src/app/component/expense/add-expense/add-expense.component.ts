import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/model/expense';
import { ExpenseService } from 'src/app/service/expense/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  expense:Expense=new Expense();

  constructor(private expenseService:ExpenseService,private router:Router,private activeRoute:ActivatedRoute) { }
  
  addExpense(){
    this.expenseService.addExpense(this.expense).subscribe(
      data=>{
        console.log(data);
        this.router.navigateByUrl("/expenses");
      }
    );
  }
  deleteExpense(id:number){
    this.expenseService.deleteExpenseById(id).subscribe(
      ()=>{
        this.router.navigateByUrl("/expenses");
      }
    ) 
  }
  
  ngOnInit(): void {
    const idIdPresent=this.activeRoute.snapshot.paramMap.has('id');
    if(idIdPresent){
      const id=this.activeRoute.snapshot.paramMap.get('id');
      this.expenseService.getExpenseById(id as unknown as number).subscribe(
        data=>this.expense=data
      );
    }
  }

}
