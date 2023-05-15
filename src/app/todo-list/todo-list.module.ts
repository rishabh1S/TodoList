import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodoListComponent],
  providers: [TodoService], // <-- Add the TodoService provider here
})
export class TodoListModule {}
