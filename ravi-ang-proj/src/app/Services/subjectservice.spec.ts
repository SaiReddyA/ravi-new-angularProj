import { TestBed } from '@angular/core/testing';

import { Subjectservice } from './subjectservice';

describe('Subjectservice', () => {
  let service: Subjectservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Subjectservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
