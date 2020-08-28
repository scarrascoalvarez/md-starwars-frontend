import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router
    ) { }

  canActivate(): boolean {
    if (this.authenticationService.isAdmin) {
      return true;
    } else {
      this.router.navigate([]);
      return false;
    }
  }

}
