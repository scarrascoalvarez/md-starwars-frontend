import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { DialogStructureComponent } from './dialog-structure/dialog-structure.component';
import { RegisterComponent } from './register/register.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
@NgModule({
  declarations: [
    LoginComponent,
    DialogStructureComponent,
    RegisterComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    LoginComponent
  ],
  entryComponents: [
    RegisterComponent,
    RegisterConfirmationComponent
  ]
})
export class SharedModule { }
