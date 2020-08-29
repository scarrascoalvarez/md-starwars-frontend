import { TestBed } from '@angular/core/testing';

import { StarshipsListService } from './starships-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipsListService', () => {
  let service: StarshipsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarshipsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
