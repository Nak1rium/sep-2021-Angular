import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { token, user } from '../interfaces';
import { urls } from '../contants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';

  constructor(private http:HttpClient) { }

  register(user: user): Observable<user> {
    return this.http.post<user>(urls.users, user);
  }

  login(user: user): Observable<token> {
    return this.http.post<token>(urls.auth, user);
  }

  setToken(token: token): void {
    localStorage.setItem(this.accessTokenKey, token.access);
  }

  getToken(): string {
    return localStorage.getItem(this.accessTokenKey) as string;
  }

  deleteToken(): void {
    localStorage.removeItem(this.accessTokenKey)
  }

  isAuthorization(): boolean {
   return  !!localStorage.getItem(this.accessTokenKey)
  }

}
