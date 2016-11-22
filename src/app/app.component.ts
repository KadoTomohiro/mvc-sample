import { Component } from '@angular/core';
import {TodoStoreService} from "./todo-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(public todoListModel: TodoStoreService){
    todoListModel.fetch();
  }
}
