import { Injectable, OnDestroy } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { User } from 'src/app/core/models/user.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {

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

  loginUser(user: User): Observable<User> {   
    return new Observable(observer => {
      this.userDataService.loginUser(user).pipe(
        takeUntil(this.destroy$)
      ).subscribe((response: any) => {
        observer.next(response.user);
        observer.complete();
      }, error => {
        observer.next(null);
        observer.complete();
      });
    })
  }
  
}
