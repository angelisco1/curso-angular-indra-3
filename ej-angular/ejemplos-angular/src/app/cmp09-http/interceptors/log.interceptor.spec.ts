import { TestBed } from '@angular/core/testing';

import { LogInterceptor } from './log.interceptor';

describe('LogInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LogInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LogInterceptor = TestBed.inject(LogInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
