import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {

  /**
   * Indicates if the sidebar is visible
   */
  showSidebar: BehaviorSubject<string> = new BehaviorSubject<string>('in');
  showSidebar$ = this.showSidebar.asObservable();

  /**
   * Indicates if the overlay is visible
   */
  showOverlay: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showOverlay$ = this.showOverlay.asObservable();

  showHideSidebar(): void {
    this.showSidebar.getValue() === 'in' ? this.showSidebar.next('out') : this.showSidebar.next('in');
    this.showOverlay.getValue() ? this.showOverlay.next(false) : this.showOverlay.next(true);

  }
}
