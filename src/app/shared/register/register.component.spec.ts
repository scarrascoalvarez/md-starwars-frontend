import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserDataServiceMock } from 'src/assets/mocks/user-data/user-data.mock.service';
import { RegisterService } from './register.service';
import { RegisterServiceMock } from 'src/assets/mocks/register/register.service.mock';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const dialogMock = {
    close: () => { }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule
      ],
      declarations: [RegisterComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { title: 'title', description: 'description' } },
        { provide: MatDialogRef, useValue: dialogMock },
        { provide: UserDataService, useClass: UserDataServiceMock },
        { provide: RegisterService, useClass: RegisterServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register invalid form', () => {
    expect(component.register()).toBe();

  });

  it('should register valid form', () => {
    component.registerForm.setValue({
      email: 'test@test.com',
      lastname: 'lastname',
      name: 'name',
      role: 'Administrator',
      password: '12345678'
    });
    expect(component.register()).toBe();
  });

});
