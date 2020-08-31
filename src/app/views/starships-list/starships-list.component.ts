import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import {StarshipsListService} from './starships-list.service';
import { animations } from 'src/app/core/animations/animations';
@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StarshipsListService],
  animations: [animations]
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
    this.scrollToTop();
    this.starshipsListService.getInitialStarships();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onScroll() {    
    this.starshipsListService.getMoreStarships();    
  }

  private scrollToTop() {
    window.scroll(0, 0);
  }

}
