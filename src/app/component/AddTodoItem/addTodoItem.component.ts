import { Component, OnInit } from '@angular/core';
import { TodoItemViewModel } from '../../Class/TodoItemViewModel';
import { TodoService } from '../../service/todo.service';
import { TodoItem } from 'src/app/Class/TodoItem';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './addTodoItem.component.html',
  styleUrls: ['./addTodoItem.component.css']
})
export class AddTodoItemComponent implements OnInit {
  todolist: TodoItemViewModel[];
  newTodo: TodoItemViewModel;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.newTodo = new TodoItemViewModel();
    this.getTodos();
    console.log(this.newTodo);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => this.todolist = todos.sort((a,b)=>{
      return a.CreatedDate < b.CreatedDate ?1:-1;
    }));
  }

  addTodo(): void {
    this.todoService.addTodos(this.newTodo).subscribe(
      resp => {
        console.log(resp);
        this.todolist.push(resp);
        this.todolist.sort((a,b)=>{
          return a.CreatedDate < b.CreatedDate ?1:-1;
        });
      }
    );
    this.newTodo = new TodoItemViewModel();
  }

}
