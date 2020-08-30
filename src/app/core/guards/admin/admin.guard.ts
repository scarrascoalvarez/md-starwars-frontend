import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { MainLayoutService } from 'src/app/layout/main-layout/main-layout.service';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authenticationService: AuthenticationService,
    private mainLayoutService: MainLayoutService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  canActivate(): boolean {
    if (this.authenticationService.isAdmin) {
      return true;
    } else {
      this.router.navigate([]);
      var dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '750px',
        data: {
          title: 'Solo usuarios administradores',
          description: 'Inicia sesión con un usuario administrador para poder ver esta página.'
        }
      });
      dialogRef.afterClosed()
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe(() => {
        this.mainLayoutService.showHideSidebar();
      });
      return false;
    }
  }

}
