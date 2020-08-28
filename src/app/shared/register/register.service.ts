import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { User } from 'src/app/core/models/user.model';
import { Observable } from 'rxjs/internal/Observable';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable({
  providedIn: 'root'
})
export class RegisterService implements OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  registerUser(user: User): Observable<boolean> {   
    return new Observable(observer => {
      this.userDataService.registerUser(user).pipe(
        takeUntil(this.destroy$)
      ).subscribe((response: any) => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.next(false);
        observer.complete();
      });
    })
  }
}
