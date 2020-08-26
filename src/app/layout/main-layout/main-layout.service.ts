import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MainLayoutService {

  /**
   * Indicates if the sidebar is visible
   */
  showSidebar: BehaviorSubject<string> = new BehaviorSubject<string>('out');
  showSidebar$ = this.showSidebar.asObservable();

  showHideSidebar(): void {
    this.showSidebar.getValue() === 'in' ? this.showSidebar.next('out') : this.showSidebar.next('in');
  }
}
