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
  newTodo: TodoItem;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.newTodo = new TodoItem();
    this.getTodos();
    console.log(this.newTodo);
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todolist = todos;
    });
  }

  addTodo(): void {
    console.log(this.newTodo);
    this.todoService.addTodos(this.newTodo).subscribe(todo => console.log('add todo'));
    this.newTodo = new TodoItem();
  }

}
