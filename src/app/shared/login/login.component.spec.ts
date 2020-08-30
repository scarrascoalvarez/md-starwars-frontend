import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginService } from './login.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserDataServiceMock } from 'src/assets/mocks/user-data/user-data.mock.service';
import { LoginServiceMock } from 'src/assets/mocks/login/login.service.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MaterialModule,
        RouterTestingModule,
        NoopAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: UserDataService, useClass: UserDataServiceMock },
        { provide: LoginService, useClass: LoginServiceMock },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
