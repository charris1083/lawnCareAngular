import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


const Api_Url = 'http://localhost:50171';

@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();


  constructor(private _http: HttpClient, private _router: Router) {
   }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
      `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;

    return this._http.post(`${Api_Url}/token`, str).subscribe((token: Token) => {
      this.userInfo = token;
      localStorage.setItem('id_token', token.access_token);
      this.isLoggedIn.next(true);
      this._router.navigate(['/clients']);
    });
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }
    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`)
    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: authHeader });
  }
  logout(): Observable<Object> {
    localStorage.clear();
    this.isLoggedIn.next(false);

    return this._http.post(`${Api_Url}/api/Account/Logout`, { headers: this.setHeader() } );
  }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
