import { Component, OnInit } from '@angular/core';
import { TodoItem} from '../../Class/TodoItem';
import { TodoService } from '../../service/todo.service'

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {

  todolist:TodoItem[];

  constructor(private todoService: TodoService) {
   }

  ngOnInit() {
    this.getTodos();
  }

  getTodos():void{
    this.todoService.getTodos().subscribe(todos => {
      this.todolist=todos;      
    });
  }

  Delete(todo:TodoItem){
    console.log("delete")
    return;
  }
}
