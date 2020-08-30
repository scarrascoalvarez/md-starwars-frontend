import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { MainLayoutService } from 'src/app/layout/main-layout/main-layout.service';
import { MainLayoutServiceMock } from 'src/assets/mocks/main-layout/main-layout.mock.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { AuthenticationServiceMock } from 'src/assets/mocks/authentication/authentication.mock.service';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        { provide: MainLayoutService, useClass: MainLayoutServiceMock },
        { provice: AuthenticationService, useClass: AuthenticationServiceMock }
      ]
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
