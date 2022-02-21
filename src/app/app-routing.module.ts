import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { AddExpenseComponent } from './component/expense/add-expense/add-expense.component';
import { ExpenseComponent } from './component/expense/expense.component';


const routes: Routes = [
  {
    path:'expenses',
    component:ExpenseComponent,
  },
  {
    path:'addexpense',
    component:AddExpenseComponent
  },
  {
    path:'editexpense/:id',
    component:AddExpenseComponent
  },
  {
    path:'',
    redirectTo:'/expenses',
    pathMatch:'full'
  },{
    path:'books',
    component:BookComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
