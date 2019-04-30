import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItemViewModel } from '../../Class/TodoItemViewModel';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() todolist: TodoItemViewModel[];
  @Output() todolistChange = new EventEmitter<TodoItemViewModel[]>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  Delete(id: string): void {
    console.log('delete: ' + id);
    this.todolist = this.todolist.filter(todo => todo.Id !== id);
    this.todoService.deleteTodo(id).subscribe();
    this.todolistChange.emit(this.todolist)
  }
}
