import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodoText: string = '';
  allChecked = false;
  newTodo: any;
  completedTodos: any;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addTodo(): void {
    const newTodoText = this.newTodoText.trim();
    if (newTodoText) {
      const newTodo: any = {
        text: newTodoText,
        completed: false,
      };
      this.todos.push(newTodo);
      this.newTodoText = '';
    }
  }

  updateTodoStatus(todo: any) {
    this.todoService.updateTodoStatus(todo);
  }

  deleteTodo(todo: any): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    const completedIndex = this.completedTodos.indexOf(todo);
    if (completedIndex !== -1) {
      this.completedTodos.splice(completedIndex, 1);
    }
  }
  getRemainingTodos(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  toggleAll(): void {
    const allCompleted = this.allCompleted();
    this.todos.forEach((todo) => (todo.completed = !allCompleted));
  }

  showClearButton(): boolean {
    return this.todos.some((todo) => todo.completed);
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }

  allCompleted(): boolean {
    if (this.todos.length === 0) {
      return false;
    }
    return this.todos.every((todo) => todo.completed);
  }
}
