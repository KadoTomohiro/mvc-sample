import { Component, OnInit} from '@angular/core';
import {TodoStatisticsService} from "../todo-statistics.service";

@Component({
  selector: 'app-unchecked-counter',
  templateUrl: './unchecked-counter.component.html',
  styleUrls: ['./unchecked-counter.component.css']
})
export class UncheckedCounterComponent implements OnInit {

  // count:number;

  constructor(private todoStatistic: TodoStatisticsService) {
    // this.count = this.todoStatistic.unchecked;
  }

  get count() {
    return this.todoStatistic.unchecked
  }

  ngOnInit() {
  }

}
