import { Injectable } from '@angular/core';
import {TodoStoreService} from "./todo-list.service";

@Injectable()
export class TodoStatisticsService {

  public count: number;
  public unchecked: number;
  public checked: number;
  constructor(private todoModel: TodoStoreService) {

    this.updateStatistics();

    this.todoModel.fetched.subscribe(() => {
      this.updateStatistics();
    })
  }

  private updateStatistics() {

    let todos = this.todoModel.todos;

    this.count = todos.length;
    this.unchecked =  todos.filter(todo => !todo.checked).length;
    this.checked = todos.filter(todo => todo.checked).length;
  }

}
