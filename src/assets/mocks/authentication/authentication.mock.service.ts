import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LOGIN_USER_RESPONSE } from './../user-data/user-data.mock';

@Injectable()
export class AuthenticationServiceMock {

    user$ = of(LOGIN_USER_RESPONSE.user);

    isAuthenticated = true;

    isAdmin = true;
}
