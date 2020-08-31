import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

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

  it('should intercept call and dont receive error', () => {
    service.intercept({
      clone: () => { }, url: 'test', headers: { append: () => 'test' }
    } as any, { handle: () => of(true) } as any).subscribe(result => { });
  });
});
