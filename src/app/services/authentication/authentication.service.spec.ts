import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LOGIN_USER_RESPONSE } from 'src/assets/mocks/user-data/user-data.mock';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should setApplicationUser, the user is admin', () => {
    let user = LOGIN_USER_RESPONSE.user;
    user.role = 'Administrator';
    expect(service.setApplicationUser(user)).toBe();
  });

  it('should setApplicationUser, the user is not admin', () => {
    let user = LOGIN_USER_RESPONSE.user;
    user.role = 'Customer';
    expect(service.setApplicationUser(user)).toBe();
  });

  it('should logout', () => {
    expect(service.logout()).toBe();
  });
});
