import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-employee-list',
  template: `<div>
               <h1>Emplyoee lIst</h1>
               <p>{{errormsg}}</p>
              <ul *ngFor="let employee of emplyoees">
                 <li>{{employee.name}}</li>
              </ul>
            </div>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public errormsg="";

  public emplyoees=[];
  constructor(private _emplyoeeservice:EmployeeServicesService) { }

  ngOnInit() {
    this._emplyoeeservice.getEmployee()
    .subscribe(data => this.emplyoees = data,
                error => this.errormsg =error);
  }

}
