import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StarshipsDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getStarships(page: number, headers?: HttpHeaders): Observable<any> {
    const url = `${environment.API_STARWARS_URL}/starships/?page=${page}`;
    return this.httpClient.get<any>(url, {headers});
  }

  getStarship(id: number): Observable<any> {
    const url = `${environment.API_STARWARS_URL}/starships/${id}`;
    return this.httpClient.get<any>(url);
  }
}
