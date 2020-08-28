import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StarshipsDataService } from 'src/app/services/starships-data/starships-data.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { HttpHeaders } from '@angular/common/http';
import { PaginatedStarships, Starship } from 'src/app/core/models/startship.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipsListService implements OnDestroy {

  /** 
   * Contains the page number
   */
  private page = 1;

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Indicates if content is being loaded to display a spinner
   */
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  /**
   * Total list of starships
   */
  starships: BehaviorSubject<Starship[]> = new BehaviorSubject<Starship[]>(null);
  starship$ = this.starships.asObservable();

    /**
   * Indicates if the complete list has been loaded
   */
  private listCompleted: boolean = false;


  constructor(
    private starshipsDataService: StarshipsDataService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getInitialStarships(): void {
    this.starshipsDataService.getStarships(this.page)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((starships: PaginatedStarships) => {
        starships.results.forEach((starship: Starship) => {
          starship.id = `${(starship.url.split('/')[starship.url.split('/').length - 2])}`;
          starship.image = `${environment.API_IMAGE_URL}${starship.id}.jpg`
        });
        this.starships.next(starships.results);        
      })
  }

  getMoreStarships(): void {
    if (!this.listCompleted) {
      this.page = this.page + 1;
      this.isLoading.next(true);
      let headers = new HttpHeaders();
      headers = headers.append('NO_LOADER', 'true');
      this.starshipsDataService.getStarships(this.page)
        .pipe(
          takeUntil(this.destroy$)
        ).subscribe((starships: PaginatedStarships) => {
          starships.results.forEach((starship: Starship) => {
            starship.image = `${environment.API_IMAGE_URL}${starship.url.split('/')[starship.url.split('/').length - 2]}.jpg`
          });
          const totalStarships = [...this.starships.getValue(), ...starships.results];
          this.starships.next(totalStarships);
          if (starships.count === this.starships.getValue().length) {
            this.listCompleted = true;
          }
          this.isLoading.next(false);
        })
    }
  }


}
