import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Starship } from './../../../app/core/models/startship.model';
import { STARSHIP, STARSHIP_WITH_FILMS } from './../starships-data/starships-data.mock';

@Injectable()
export class StarshipDetailServiceMock {


    getStarshipInfo(id: number): Observable<any> {
        return of(STARSHIP);
    }


    getRelatedMovies(starship: Starship): Observable<any> {
        return of(STARSHIP_WITH_FILMS);
    }


}
