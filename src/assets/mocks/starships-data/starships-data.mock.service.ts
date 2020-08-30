import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { STARSHIPS, STARSHIP, FILM } from './starships-data.mock';

@Injectable()
export class StarshipsDataServiceMock {

  getStarships(): Observable<any> {
    return of (STARSHIPS);
  }

  requestStarships(page: number, headers?: HttpHeaders): Observable<any> {
    return of (STARSHIPS);
  }

  getStarship(id: number): Observable<any> {
    return of (STARSHIP);
  }

  requestStarship(id: number): Observable<any> {
    return of (STARSHIP);
  }

  getFilm(id: number): Observable<any> {
    return of (FILM);
  }

  requestFilms(id: number): Observable<any> {
    return of (FILM);
  }

}
