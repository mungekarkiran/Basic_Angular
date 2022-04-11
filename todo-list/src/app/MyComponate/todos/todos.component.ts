import { Component, OnInit } from '@angular/core';
// import Todo.ts 
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //create todos array  
  todos : Todo[];

  constructor() { 
    this.todos = []
    
    // {
    //   sno : 1,
    //   title : 'title_string1',
    //   desc : 'desc_string',
    //   active : true

    // },
    // {
    //   sno : 2,
    //   title : 'title_string2',
    //   desc : 'desc_string',
    //   active : true

    // },
    // {
    //   sno : 3,
    //   title : 'title_string3',
    //   desc : 'desc_string',
    //   active : true

    // }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(this.todos);
    
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    console.log(this.todos);
    
  }
}
