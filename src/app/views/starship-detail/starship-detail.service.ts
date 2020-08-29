import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Starship } from 'src/app/core/models/startship.model';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Observable } from 'rxjs/internal/Observable';
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
        starship.image = `${environment.API_IMAGE_URL}${starship.id}.jpg`
        observer.next(starship);
        observer.complete();
      })
    })
  }


}
