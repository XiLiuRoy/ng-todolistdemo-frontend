import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoItemComponent } from './component/AddTodoItem/addTodoItem.component';
import { TodoitemComponent } from './component/todoitem/todoitem.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    TodoitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
