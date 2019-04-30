import { Injectable } from '@angular/core';
import { TodoItem } from '../Class/TodoItem';
import { TodoItemViewModel } from '../Class/TodoItemViewModel'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoApi = 'https://viraox50w4.execute-api.ap-southeast-2.amazonaws.com/Stage';
  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<TodoItemViewModel[]> {
    return this.http.get<TodoItemViewModel[]>(this.todoApi)
      .pipe(
        tap(_ => console.log('Fetched data'))
      );
  }

  addTodos(todoitem: TodoItemViewModel): Observable<TodoItemViewModel> {
    console.log('put obj ' + todoitem);
    return this.http.post<TodoItemViewModel>(this.todoApi + '/TodoItem', todoitem,httpOptions).pipe(
      tap(_ => console.log('Put a new object'))
    );
  }

  deleteTodo(id: string): Observable<TodoItem> {
    return this.http.delete<TodoItem>(this.todoApi + '/TodoItem/' + id, httpOptions).pipe(
      tap(_ => console.log('Delete an object'))
    );
  }
}
