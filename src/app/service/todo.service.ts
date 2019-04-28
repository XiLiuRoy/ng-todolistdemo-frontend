import { Injectable } from '@angular/core';
import { TodoItem } from '../Class/TodoItem';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';
import {ApiResponse} from '../Class/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private getTodoApi:string = 'https://c10hwa9l58.execute-api.ap-southeast-2.amazonaws.com/dev';
  constructor(
    private http:HttpClient
  ) { }

  getTodos():Observable<TodoItem[]>{
    return this.http.get<ApiResponse>(this.getTodoApi,{observe:'body'})
    .pipe(
      tap(_=>  console.log("Fetch data "+_.body)),
      map(resp=>resp.body as TodoItem[])
    );
  }
}
