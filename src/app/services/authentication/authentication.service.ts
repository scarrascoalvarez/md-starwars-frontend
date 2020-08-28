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

  isAuthenticated: boolean = false;

  /**
   * Reports if the user is an administrator
   */
  isAdmin: boolean = false;

  constructor() { }

  setApplicationUser(user: User): void {
    this.user = user;
    this.isAuthenticated = true;
    this.user.role === 'Administrator' ? this.isAdmin = true : this.isAdmin = false;
  }

  logoutUser(): void {
    this.user = null;
    this.isAuthenticated = false;
    this.isAdmin = false;
  }
}
