import { TestBed } from '@angular/core/testing';

import { StarshipsListService } from './starships-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { StarshipsDataServiceMock } from 'src/assets/mocks/starships-data/starships-data.mock.service';

describe('StarshipsListService', () => {
  let service: StarshipsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: StarshipsDataService, useClass: StarshipsDataServiceMock },
      ]
    });
    service = TestBed.inject(StarshipsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
