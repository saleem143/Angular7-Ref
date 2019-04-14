import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
 selector: 'app-test',//three ways 1.'app-test',2.'.app-test',3.[app-test] 
 //1. way ----templateUrl: './test.component.html',
 //2. nd way----template:"<div>This is inline template 2nd way</div>"
 template:`<div>
            for multiple line use astric as like given
            In template how to bind and call methods<br>
           we canot accept golbal variable through in template section so we first bind it and use like this {{siteurl}}<br>
            {{name}}<br>
            {{"hello"+name}}<br>
            {{2+2}}<br>
            {{name.length}}<br>
            {{name.toUpperCase()}}<br>
            {{greateUser()}}<br>
-----------------------------------------------------------------
            Property binding<br>
            difference between attribute and property is both are not same<br>
            1.attribute----html <br>
            2.property---DOM <br>
            3.property value changes hoever but attribute can not<br>
            <input [id]="myid" type="text" value="saleem test"/><br> test in console and change input values ($0.getAttribute("value"))-and-($0.value)
            <input bind-id="myid" type="text" value="saleem test"/><br> @nd way of property binding <br>
            <input id="{{myid}}" type="text" value="saleem test"/> <br>This can alsoe done by interploation but boolean type is not work out with that use property for that 
            <br>
            <input [disabled]="true" id="{{myid}}" type="text" value="saleem test"/>
            ---------------------------------------------------
            Css Binding<br>
            <h1 [class]="successclass">text will green</h1>
            <h1 [class]="successclass" class="success">Worng way of coding</h1>
            <h1 [class.failur]="danger" > way of coding</h1>
            <p>Multiple way of binding class</p>
            <h1 [ngClass]="messagClass" > way of coding</h1>
            ------------------------------------------------------
            style binding<br>
            <h1 [style.color]="'yellow'">Check style bind</h1>
            <h1 [style.color]="danger ? 'red' : 'green'">Check style bind</h1>
            <h1 [style.color]="highlight">Check style bind</h1>
            multiple styles
            <h1 [ngStyle]="italic">Check style bind</h1>
            ----------------------------------------------------------
            Event binding<br>
            <button class="btn btn-primary" (click)="goclick($event)" >Cllick and check console for event</button>
             <br><h2>in inline</h2>
             <button class="btn btn-primary" (click)="name='jashajshajs'">click</button>{{name}}<br>
            --------------------------------------------------------------Template refernece
            <br>
            <input #myinput value="rajkumar">
            <button class="btn btn-primary" (click)="getlog(myinput.value)">Log // pass myinput for obj</button>
            <br>------------------------------------------------------------Two way binding
            <br>
            <input [(ngModel)]="name" type="text" />{{name}}
            <br>-------------------------------------------------------------ng-if
            <h1 *ngIf="hasspcl; else elseBlock" >
               {{name}}
            </h1>
            <ng-template #elseBlock>
            <h1>
              elseblock operte
            </h1>
            </ng-template>
            <br>--------------------------------------------------
              Another way is
              <div *ngIf="hasspcl; then thenblock; else elseBlock" >
                  
              </div>
              <ng-template #thenblock>
              <h1>
                then block
              </h1>
              </ng-template>
              <ng-template #elseBlock>
              <h1>
                elseblock operte
              </h1>
              </ng-template>
              <br>--------------------------------------------ng-switch
              <br>
              <div [ngSwitch]="color">
                  <div *ngSwitchCase="'red'">pick up is red</div>
                  <div *ngSwitchCase="'green'">pick up is green</div>
                  <div *ngSwitchDefault>pick up  any one default case</div>
              </div>
              <br>--------------------------------------------ng-for
              <br>
              <div *ngFor="let color of colors; even as e">
                 <h2>{{e}} {{color}}</h2>
              </div>
              <br>--------------------------------------------Component interaction
              <br>Parent com(app com) to child comp(test comp)
                 1.appcomponent to child<br>
                    go to appcom.ts and create variable namefromp<br>
                  2. then come to appcom.html<br>
                      send this variable to block in chlid block<br>
                  3.go to test comp .ts<br>
                      caputre that block variable declare in parent and use it<br>
               output----------------{{parentdata}}<br><br>
               ----------------------------------------------------now from child to par <br>
               Create one emiiter as show in below
                  and bind value to it by event rises
                  Capture that value in parentblock 
                  <button (click)="gebind()" class="btn btn-primary">Bind event  after click go top to check msg</button>
           
            </div>`,
           
  //1st --way ---styleUrls: ['./test.component.css']
  //2nd way
  styles: [`
     div{
       color:black
     }
     .success{
       color:green
     }
     .failur{
       color:red
     }
     .special{
       font-size:50px
     }
     .colorj{
       color:blue
     }
  `]
})
export class TestComponent implements OnInit {
  public name="sqleem";
  public myid="testid";
  public danger=false;
  public hasspcl=true;
  public successclass ="success";
  public highlight="blue";
  public color ='yellow';
  public colors =["red","green","yellow"];

  public italic ={
      color:"yellow",
      fontWeight:"bold"
  }
  public messagClass={
    success:!this.danger,
    failur:this.danger,
    special:this.hasspcl
  }
  public siteurl=window.location.href;

  @Input() public parentdata;
  //aliasing @Input('parentdata') public parentdataAS;

  @Output() public childevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  greateUser(){
    return "hello "+this.name;
  }
  goclick(event){
    console.log(event);
    alert("im am  in");
  }
  getlog(value){
     alert(value);
  }
  gebind(){
    this.childevent.emit("communicating for children");
  }
}
