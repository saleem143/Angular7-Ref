import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-emplyoee-details',
  template: `<div>
               <h1>{{errormsg}}</h1>
            <div *ngFor="let employee of emplyoees">
                <div>{{employee.name}}  - {{employee.id}} -{{employee.email}}</div>
            </div>
            </div>`,
  styleUrls: ['./emplyoee-details.component.css']
})
export class EmplyoeeDetailsComponent implements OnInit {
 public errormsg="";

  public emplyoees=[];
  constructor(private _emplyoeeservice:EmployeeServicesService) { }

  ngOnInit() {
    this._emplyoeeservice.getEmployee()
    .subscribe(data => this.emplyoees = data,
                error => this.errormsg =error);
  }


}
