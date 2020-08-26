import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {LoginService} from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Form with login information
   */
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.buildLoginForm();
  }

  login(): void {
    if (this.loginForm.valid) {
      console.log('login');
    }
  }

  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });;
  }

}
