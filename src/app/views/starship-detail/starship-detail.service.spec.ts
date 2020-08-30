import { TestBed } from '@angular/core/testing';

import { StarshipDetailService } from './starship-detail.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { StarshipsDataServiceMock } from 'src/assets/mocks/starships-data/starships-data.mock.service';

describe('StarshipDetailService', () => {
  let service: StarshipDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StarshipsDataService, useClass: StarshipsDataServiceMock },
      ]
    });
    service = TestBed.inject(StarshipDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
