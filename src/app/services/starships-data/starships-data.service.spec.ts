import { TestBed } from '@angular/core/testing';

import { StarshipsDataService } from './starships-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipsDataService', () => {
  let service: StarshipsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarshipsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
