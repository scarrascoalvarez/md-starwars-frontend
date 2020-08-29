import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { StarshipDetailService } from './starship-detail.service';
import { Starship } from 'src/app/core/models/startship.model';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipDetailService]
})
export class StarshipDetailComponent implements OnInit, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Contains the information of the starship
   */
  starship: Starship;

  constructor(
    private activatedRoute: ActivatedRoute,
    public starshipDetailService: StarshipDetailService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: Params) => {
      this.starshipDetailService.getStarshipInfo(params.id).pipe(
        takeUntil(this.destroy$)
      ).subscribe((starship: Starship) => {
        if (!starship.films[0].image) {
          this.starshipDetailService.getRelatedMovies(starship).pipe(
            takeUntil(this.destroy$)
          ).subscribe((starShipWithFilms: Starship) => {
            this.starship = starShipWithFilms;
            this.changeDetectorRef.markForCheck();
          })
        } else {
          this.starship = starship;
          this.changeDetectorRef.markForCheck();
        }
      });
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  showNotFoundImage(cardImage: any): void {
    cardImage.style.backgroundImage = 'url(assets/images/not-found.png)';
  }

}
