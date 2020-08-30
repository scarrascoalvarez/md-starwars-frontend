import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterServiceMock {

    registerUser(user: any): Observable<any> {
        return of(true);
    }

}
