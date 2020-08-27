import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/core/helpers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  /**
   * Form with register information
   */
  registerForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  register(): void {
    if (this.registerForm.valid) {
      console.log('login');
    }
  }

  buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, [Validators.required, CustomValidators.emailValidation()]],
      lastname: [null, Validators.required],
      name: [null, Validators.required],
      role: ['Administrator', Validators.required],
      password: [null, [Validators.required, CustomValidators.minMaxLength({min: 8, max: 12})]]
    });;
  }

}
