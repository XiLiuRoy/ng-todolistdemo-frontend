import { Component, OnInit } from '@angular/core';
import { TodoItem } from  '../../Class/TodoItem';
import { TodoItemViewModel} from '../../Class/TodoItemViewModel'
import { TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-addTodoItem',
  templateUrl: './addTodoItem.component.html',
  styleUrls: ['./addTodoItem.component.css']
})
export class AddTodoItemComponent implements OnInit {

  newTodo:TodoItemViewModel;

  constructor(private todoService:TodoService) {
    
   }

  ngOnInit() {
    this.newTodo = new TodoItemViewModel();
    console.log(this.newTodo);
  }

  addTodo():void{
    console.log(this.newTodo);
    this.todoService.addTodos(this.newTodo).subscribe(todo => console.log("add todo"));
  }

}
