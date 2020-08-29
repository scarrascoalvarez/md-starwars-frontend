import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from 'src/app/core/models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  /**
   * User logged into the application
   */
  private user: BehaviorSubject<User> = new BehaviorSubject(null);
  public user$ = this.user.asObservable();

  /**
   * Reports if the user is an autheticated
   */
  isAuthenticated: boolean = false;

  /**
   * Reports if the user is an administrator
   */
  isAdmin: boolean = false;

  constructor(
    private router: Router
  ) { }

  setApplicationUser(user: User): void {
    this.user.next(user);
    this.isAuthenticated = true;
    user.role === 'Administrator' ? this.isAdmin = true : this.isAdmin = false;
  }

  logout(): void {
    this.user.next(null);
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.router.navigate(['']);
  }
}
