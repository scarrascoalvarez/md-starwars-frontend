import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authenticationService: AuthenticationService,
    public router: Router,
    public dialog: MatDialog
    ) { }

  canActivate(): boolean {
    if (this.authenticationService.isAdmin) {
      return true;
    } else {
      this.router.navigate([]);
      this.dialog.open(ConfirmationDialogComponent, {
        width: '750px',
        data: {
          title: 'Solo usuarios administradores',
          description: 'Inicia sesión con un usuario administrador para poder ver esta página.'
        }
      });
      return false;
    }
  }

}
