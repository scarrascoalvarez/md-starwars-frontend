import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { takeUntil } from 'rxjs/operators';
import { MainLayoutService } from 'src/app/layout/main-layout/main-layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

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
    if (this.authenticationService.isAuthenticated) {
      return true;
    } else {
      this.router.navigate([]);
      var dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '750px',
        data: {
          title: 'Solo usuarios registrados',
          description: 'Inicia sesión para poder ver esta página.'
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
