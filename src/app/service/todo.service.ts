import { Injectable } from '@angular/core';
import { TodoItem } from '../Class/TodoItem';
import { TodoItemViewModel} from '../Class/TodoItemViewModel'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import {ApiResponse} from '../Class/ApiResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  //private todoApi:string = 'https://c10hwa9l58.execute-api.ap-southeast-2.amazonaws.com/dev';//
  private todoApi:string = 'https://viraox50w4.execute-api.ap-southeast-2.amazonaws.com/Stage';
  constructor(
    private http:HttpClient
  ) { }

  getTodos():Observable<TodoItem[]>{
    return this.http.get(this.todoApi)
    .pipe(
      map((resp:any)=> JSON.parse(resp.body)),
      tap(_=>  console.log("Fetched data"))
    );
  }

  addTodos(todoitem:TodoItemViewModel):Observable<any>{
    console.log("put obj "+todoitem);
    return this.http.put<TodoItemViewModel>(this.todoApi+'/TodoItem',todoitem).pipe(
      tap(_=> console.log("Put a new object"))
    );
  }
}
