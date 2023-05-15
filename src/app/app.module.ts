import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoListModule } from './todo-list/todo-list.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodoListModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {} // <-- Add the "export" keyword before the class declaration
