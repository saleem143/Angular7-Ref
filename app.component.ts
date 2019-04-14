import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TesterApp';
  public namefrompar="go goa";
  public msg="";
  constructor() { }

  ngOnInit() {
     $(document).ready(function() {
       alert('I am Called From jQuery');
     });
  }

}
