import { TestBed } from '@angular/core/testing';

import { StarshipDetailService } from './starship-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipDetailService', () => {
  let service: StarshipDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarshipDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
