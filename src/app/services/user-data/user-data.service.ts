import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registerUser(user: User): Observable<any> {
    const url = `${environment.API_AUTHENTICATION_URL}/user`;
    return this.httpClient.post<any>(url, user);
  }

  loginUser(user: User): Observable<any> {
    const url = `${environment.API_AUTHENTICATION_URL}/login`;
    return this.httpClient.post<any>(url, user);
  }
}
