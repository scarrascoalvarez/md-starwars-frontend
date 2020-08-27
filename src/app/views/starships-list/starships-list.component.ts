import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import {StarshipsListService} from './starships-list.service';
@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipsListService]
})
export class StarshipsListComponent implements OnInit, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    public starshipsListService: StarshipsListService
  ) { }

  ngOnInit(): void {
    this.starshipsListService.getInitialStarships();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  onScroll() {    
    this.starshipsListService.getMoreStarships();    
  }



}
