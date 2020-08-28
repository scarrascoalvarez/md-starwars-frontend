import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * User logged into the application
   */
  user: User;

  /**
   * Informs if the user is logged into the application
   */
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAuthenticated$ = this.isAuthenticated.asObservable();

  /**
   * Reports if the user is an administrator
   */
  private isAdmin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin$ = this.isAdmin.asObservable();

  constructor() { }

  setApplicationUser(user: User): void {
    console.log('user', user);
    
  }
}
