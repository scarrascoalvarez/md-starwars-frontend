import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { DialogStructureComponent } from './dialog-structure/dialog-structure.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    LoginComponent,
    DialogStructureComponent,
    RegisterComponent,
    ConfirmationDialogComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    NgxSpinnerModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    SpinnerComponent
  ],
  entryComponents: [
    RegisterComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
