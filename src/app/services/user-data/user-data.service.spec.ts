import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LOGIN_USER_RESPONSE, REGISTER_USER_RESPONSE } from 'src/assets/mocks/user-data/user-data.mock';
import { UserDataServiceMock } from 'src/assets/mocks/user-data/user-data.mock.service';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should registerUser', () => {
    service.registerUser(LOGIN_USER_RESPONSE.user).subscribe(response => {
      expect(response).toEqual(REGISTER_USER_RESPONSE);
    })
  });

  it('should loginUser', () => {
    service.loginUser(LOGIN_USER_RESPONSE.user).subscribe(response => {
      expect(response).toEqual(LOGIN_USER_RESPONSE);
    })
  });

});
