import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { routecheckerGuard } from './routechecker-guard';

describe('routecheckerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => routecheckerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
