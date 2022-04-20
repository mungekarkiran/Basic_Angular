import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp7 - Property Binding';

  isdisabled1 : Boolean = false;

  isdisabled2 : Boolean = false;

  isdisabled3 = 0;

  changeProp(){
    if (this.isdisabled3 === 0) this.isdisabled3 = 1;
    else this.isdisabled3 = 0;
  }

}
