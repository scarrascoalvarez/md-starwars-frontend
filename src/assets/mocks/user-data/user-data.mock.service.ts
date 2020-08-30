import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { REGISTER_USER_RESPONSE, LOGIN_USER_RESPONSE } from './user-data.mock';
import { User } from './../../../app/core/models/user.model';

@Injectable()
export class UserDataServiceMock {

    registerUser(user: User): Observable<any> {
        return of(REGISTER_USER_RESPONSE);
    }

    loginUser(user: User): Observable<any> {
        return of(LOGIN_USER_RESPONSE);
    }

}
