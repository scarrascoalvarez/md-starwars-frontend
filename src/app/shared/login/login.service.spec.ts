import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MaterialModule } from 'src/app/material/material.module';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { UserDataServiceMock } from 'src/assets/mocks/user-data/user-data.mock.service';
import { LOGIN_USER_RESPONSE } from 'src/assets/mocks/user-data/user-data.mock';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule
      ],
      providers: [
        { provide: UserDataService, useClass: UserDataServiceMock },
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should loginUser', () => {
    service.loginUser(LOGIN_USER_RESPONSE.user).subscribe(response => {
      expect(response).toEqual(LOGIN_USER_RESPONSE.user);
    });
  });
  
});
