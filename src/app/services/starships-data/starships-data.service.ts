import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Starship, PaginatedStarships, Film } from 'src/app/core/models/startship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipsDataService {

  /**
   * Contains a list of cached subscriptions
   */
  private starship$: Observable<Observable<PaginatedStarships>>[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Returns an observable with the list of starships and remove the observable from the cache after the stipulated cache expiration time
   * @param page listing page number
   */
  getStarships(page: number, headers?: HttpHeaders): Observable<PaginatedStarships> {
    if (!this.starship$[`page=${page}`]) {
      this.starship$[`page=${page}`] = this.requestStarships(page, headers).pipe(
        shareReplay(environment.CACHE_SIZE)
      );
      setTimeout(() => {
        this.starship$[`page=${page}`] = null;
      }, environment.CACHE_EXPIRATION_TIME);
    }
    return this.starship$[`page=${page}`];
  }

  /**
   * Make the request to obtain starships from the api
   * @param page listing page number
   */
  requestStarships(page: number, headers?: HttpHeaders): Observable<PaginatedStarships> {
    const url = `${environment.API_STARWARS_URL}/starships/?page=${page}`;
    return this.httpClient.get<PaginatedStarships>(url, {headers});
  }

  /**
   * Returns an observable with the information of the indicated starship and remove the observable from the cache after the stipulated cache expiration time
   * @param id starship identifier
   */
  getStarship(id: number): Observable<Starship> {
    if (!this.starship$[`id=${id}`]) {
      this.starship$[`id=${id}`] = this.requestStarship(id).pipe(
        shareReplay(environment.CACHE_SIZE)
      );
      setTimeout(() => {
        this.starship$[`id=${id}`] = null;
      }, environment.CACHE_EXPIRATION_TIME);
    }
    return this.starship$[`id=${id}`];
  }

  /**
   * Make the request to obtain starship detail from the api
   * @param id starship identifier
   */
  requestStarship(id: number): Observable<Starship> {
    const url = `${environment.API_STARWARS_URL}/starships/${id}/`;
    return this.httpClient.get<Starship>(url);
  }

  /**
   * Returns an observable with the movie information and removes the observable from the cache after the stipulated cache expiration time.
   * @param id starship identifier
   */
  getFilm(id: number): Observable<Film> {
    if (!this.starship$[`film=${id}`]) {
      this.starship$[`film=${id}`] = this.requestFilms(id).pipe(
        shareReplay(environment.CACHE_SIZE)
      );
      setTimeout(() => {
        this.starship$[`film=${id}`] = null;
      }, environment.CACHE_EXPIRATION_TIME);
    }
    return this.starship$[`film=${id}`];
  }

  /**
   * Make the request to obtain movie detail from the api
   * @param id starship identifier
   */
  requestFilms(id: number): Observable<Film> {
    const url = `${environment.API_STARWARS_URL}/films/${id}/`;
    return this.httpClient.get<Film>(url);
  }
}
