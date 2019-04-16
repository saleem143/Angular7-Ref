import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmplyoeeDetailsComponent } from './emplyoee-details/emplyoee-details.component';
import { DepartmentComponent } from './department/department.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'',component:EmplyoeeDetailsComponent},//for handling defalut route its means localhost:4200 is given then redirect to #/empdetails
  { path:'empdetalis',component:EmplyoeeDetailsComponent},
  { path:'emplist',component:EmployeeListComponent},
  { path:'department',component:DepartmentComponent},
 // { path:'', redirectTo:'/empdetails' pathMatch:'full'},
  { path:'**', component:PagenotfoundComponent}//should last row of this section
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[EmployeeListComponent,EmplyoeeDetailsComponent,DepartmentComponent,PagenotfoundComponent]
