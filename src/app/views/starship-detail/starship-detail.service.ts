import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Starship } from 'src/app/core/models/startship.model';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable({
  providedIn: 'root'
})
export class StarshipDetailService implements OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Starship info
   */
  starship: BehaviorSubject<Starship> = new BehaviorSubject<Starship>(null);
  starship$ = this.starship.asObservable();

  constructor(
    private starshipsDataService: StarshipsDataService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getStarshipInfo(id: number): void {
    this.starshipsDataService.getStarship(id)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((starship: Starship) => {
        this.starship.next(starship);
      })
  }


}
