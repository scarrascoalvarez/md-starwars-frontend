import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
