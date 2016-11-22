import { Component, OnInit } from '@angular/core';
import {TodoStoreService} from "../todo-list.service";
import {Todo} from "../todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Array<Todo>;

  constructor(private todoModel: TodoStoreService) {
    this.todos = todoModel.todos;
  }

  ngOnInit() {
  }

}
