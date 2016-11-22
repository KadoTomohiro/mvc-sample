import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from "./todo";
import {Output, EventEmitter} from "@angular/core";
@Injectable()
export class TodoStoreService {

  todos: Array<Todo>;
  @Output() fetched;

  private serverRequest: Observable<any>;

  private cacheData =
    [{task: 'task1', checked: true},
    {task: 'task2', checked: false},
    {task: 'task3', checked: true}];

  private serverData = [
    {task: 'task4', checked: true},
    {task: 'task5', checked: false},
    {task: 'task6', checked: true}
  ];

  constructor() {
    this.todos = new Array<Todo>();
    this.serverRequest = Observable
      .interval(5000)
      .take(1);

    this.fetched = new EventEmitter();
  }

  fetch() {
    this.setTodo(this.cacheData);

    this.serverRequest
      .subscribe(() => {
        this.setTodo(this.serverData);
        console.log('fetcged');
        this.fetched.emit();
      })
  }

  private setTodo(newTodo: Array<Todo>) {
    newTodo.forEach(todo => this.todos.push(todo));
  }


}
