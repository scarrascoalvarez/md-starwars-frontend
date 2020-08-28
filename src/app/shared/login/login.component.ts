import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { MainLayoutService } from 'src/app/layout/main-layout/main-layout.service';
import { User } from 'src/app/core/models/user.model';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class LoginComponent implements OnInit, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Form with login information
   */
  loginForm: FormGroup;

  /** 
   * Indicates if an error has occurred in the user login
   */
  loginError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    public dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private mainLayoutService: MainLayoutService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loginService.loginUser(this.loginForm.value).pipe(
        takeUntil(this.destroy$)
      ).subscribe((user: User) => {
        if (user) {
          this.authenticationService.setApplicationUser(user);
          this.mainLayoutService.showHideSidebar();
          this.loginForm.reset();
        } else {
          this.loginError = true;
          this.changeDetectorRef.markForCheck();
        }
      });
    }
  }

  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });;
  }

  openRegister(): void {
    this.dialog.open(RegisterComponent, {
      width: '750px',
    });
  }

}
