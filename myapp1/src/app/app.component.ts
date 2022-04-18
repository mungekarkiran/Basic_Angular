import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp1 - Interpolation';
  val1 = 'this is fron variable';
  val2 = 15;
  val3 = 26;

  class_name_h1 = 'h1_tag_class';

  getStr(){
    return 'this is from function';
  }
}
