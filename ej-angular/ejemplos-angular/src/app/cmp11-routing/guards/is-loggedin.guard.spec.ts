import { TestBed } from '@angular/core/testing';

import { IsLoggedinGuard } from './is-loggedin.guard';

describe('IsLoggedinGuard', () => {
  let guard: IsLoggedinGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLoggedinGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
