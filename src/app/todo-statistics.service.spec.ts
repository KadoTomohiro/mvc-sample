/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoStatisticsService } from './todo-statistics.service';

describe('TodoStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoStatisticsService]
    });
  });

  it('should ...', inject([TodoStatisticsService], (service: TodoStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
