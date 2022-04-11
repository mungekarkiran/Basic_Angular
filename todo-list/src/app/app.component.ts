import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';

  // constructor to chenge the title variable after 2 sec.
  constructor(){
    // setTimeout(() => {
    //   this.title = 'my 1st angular code.';
    // }, 2000);
  }
}
