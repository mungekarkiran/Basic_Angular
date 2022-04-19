import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp6 - Counter';

  count = 0;

  incCount(){
    this.count++;
  }

  decCount(){
    this.count--;
  }

}
