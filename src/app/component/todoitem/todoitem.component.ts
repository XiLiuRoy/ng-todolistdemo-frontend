import { Component, OnInit } from '@angular/core';
import { TodoItemViewModel } from '../../Class/TodoItemViewModel';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  todolist: TodoItemViewModel[];

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todolist = todos;
    });
  }

  Delete(id: string): void {
    console.log('delete: ' + id);
    this.todolist = this.todolist.filter(todo => todo.Id !== id);
    this.todoService.deleteTodo(id).subscribe();
    return;
  }
}
