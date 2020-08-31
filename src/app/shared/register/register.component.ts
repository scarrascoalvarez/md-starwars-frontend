import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/helpers/custom-validators';
import { RegisterService } from './register.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit, OnDestroy {

  /**
   * Use to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   * Form with register information
   */
  registerForm: FormGroup;

  /** 
   * Indicates if an error has occurred in the user registration
   */
  registryError: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  register(): void {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value).pipe(
        takeUntil(this.destroy$)
      ).subscribe((response: boolean) => {
        if (response) {
          this.dialogRef.close();
          this.dialog.open(ConfirmationDialogComponent, {
            width: '750px',
            data: {
              title: 'Gracias por registrarte',
              description: 'Hemos guardado su email correctamente, ya puede iniciar sesión'
            }
          });
        } else {
          this.registryError = true;
          this.changeDetectorRef.markForCheck();
        }
      });
    }
  }

  buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, CustomValidators.emailValidation()]],
      lastname: [null, Validators.required],
      name: [null, Validators.required],
      role: ['Administrator', Validators.required],
      password: [null, [Validators.required, CustomValidators.minMaxLength({ min: 8, max: 12 })]]
    });;
  }

}
