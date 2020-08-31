import { Injectable, OnDestroy } from '@angular/core';
import { Starship, Film } from 'src/app/core/models/startship.model';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { Subject, Observable, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipDetailService implements OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private starshipsDataService: StarshipsDataService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getStarshipInfo(id: number): Observable<Starship> {
    return new Observable(observer => {
      this.starshipsDataService.getStarship(id)
        .pipe(
          takeUntil(this.destroy$)
        ).subscribe((starship: Starship) => {
          starship.id = `${(starship.url.split('/')[starship.url.split('/').length - 2])}`;
          starship.image = `${environment.API_IMAGE_URL}starships/${starship.id}.jpg`   
          observer.next(starship);
          observer.complete();
        })
    })
  }

  getRelatedMovies(starship: Starship):  Observable<Starship> {
    return new Observable(observer => {
      const observables: Array<Observable<any>> = [];
      starship.films.forEach((filmUrl: string) => {
        const filmId = Number(`${(filmUrl.split('/')[filmUrl.split('/').length - 2])}`);
        observables.push(this.starshipsDataService.getFilm(filmId));
      })
      forkJoin(observables).pipe(takeUntil(this.destroy$)).subscribe((films: Film[]) => {
        films.forEach((film: Film) => {
          film.id = `${(film.url.split('/')[film.url.split('/').length - 2])}`;
          film.image = `${environment.API_IMAGE_URL}films/${film.id}.jpg`
        })
        starship.films = films;
        observer.next(starship);        
        observer.complete();
      });
    })
  }

}
