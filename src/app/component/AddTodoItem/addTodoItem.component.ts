import { Component, OnInit } from '@angular/core';
import { TodoItem } from  '../../Class/TodoItem';

@Component({
  selector: 'app-addTodoItem',
  templateUrl: './addTodoItem.component.html',
  styleUrls: ['./addTodoItem.component.css']
})
export class AddTodoItemComponent implements OnInit {

  todolist:Array<TodoItem>;

  constructor() {
    let todolist = [
      {
        Name:"todo list 1"
      }
    ]
   }

  ngOnInit() {
  }

}
