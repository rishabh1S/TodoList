import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  update(todo: any) {
    throw new Error('Method not implemented.');
  }
  clearCompleted(): any[] {
    throw new Error('Method not implemented.');
  }
  todos: any[] = [];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(todo: { text: string; completed: boolean }) {
    this.todos.push(todo);
  }

  updateTodoStatus(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: any) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}
