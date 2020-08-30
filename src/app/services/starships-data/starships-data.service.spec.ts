import { TestBed } from '@angular/core/testing';

import { StarshipsDataService } from './starships-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { STARSHIPS, FILM, STARSHIP } from 'src/assets/mocks/starships-data/starships-data.mock';

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

  it('should getStarships', () => {
    service.getStarships(1).subscribe(response => {
      expect(response).toEqual(STARSHIPS);
    })
  });

  it('should getStarship', () => {
    service.getStarship(1).subscribe(response => {
      expect(response).toEqual(STARSHIP);
    })
  });

  it('should getFilm', () => {
    service.getFilm(1).subscribe(response => {
      expect(response).toEqual(FILM);
    })
  });

});
