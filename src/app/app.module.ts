import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import {TodoStoreService} from "./todo-list.service";
import { UncheckedCounterComponent } from './unchecked-counter/unchecked-counter.component';
import {TodoStatisticsService} from "./todo-statistics.service";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    UncheckedCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoStoreService,
    TodoStatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
