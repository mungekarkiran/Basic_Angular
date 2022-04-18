import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp2 - component and module';

  getdata1(){
    return 'get data from function 1';
  }

  getdata2(){
    return 'get data from function 2';
  }
}
