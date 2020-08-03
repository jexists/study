import { TestBed } from '@angular/core/testing';

import { AnotherLoggerService } from './another-logger.service';

describe('AnotherLoggerService', () => {
  let service: AnotherLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
