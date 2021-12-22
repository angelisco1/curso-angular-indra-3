import { TestBed } from '@angular/core/testing';

import { IsDataSavedGuard } from './is-data-saved.guard';

describe('IsDataSavedGuard', () => {
  let guard: IsDataSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsDataSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
