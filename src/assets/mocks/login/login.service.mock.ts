import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {LOGIN_USER_RESPONSE} from  './../../../../src/assets/mocks/user-data/user-data.mock';

@Injectable()
export class LoginServiceMock {

    loginUser(user: any): Observable<any> {
        return of(LOGIN_USER_RESPONSE.user);
    }

}
