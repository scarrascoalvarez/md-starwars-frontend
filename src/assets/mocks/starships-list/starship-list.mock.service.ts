import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { STARSHIPS } from './../starships-data/starships-data.mock';

@Injectable()
export class StarshipsListServiceMock {

    isLoading$ = of(false);

    starship$ = of(STARSHIPS.results)

    listCompleted = STARSHIPS.results;

}

