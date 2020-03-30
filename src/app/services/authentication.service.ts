import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly registerUrl = 'http://localhost:8000/auth/register';
  private readonly loginUrl = 'http://localhost:8000/auth/login';

  constructor(private http: HttpClient) { }

  register(userInfo) {
    return this.http.post(this.registerUrl, userInfo);
  }

  login(userInfo) {
    return this.http.post(this.loginUrl, userInfo);
  }

  isAdmin() {
    let isAdmin = localStorage.getItem('isAdmin');
    if(isAdmin == 'false' || isAdmin == null) {
      return false;
    }
    return true;
  }

  isAuth() {
    return localStorage.getItem('userId');
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
