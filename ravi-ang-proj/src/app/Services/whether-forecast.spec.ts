import { TestBed } from '@angular/core/testing';

import { WhetherForecast } from './whether-forecast';

describe('WhetherForecast', () => {
  let service: WhetherForecast;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhetherForecast);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
