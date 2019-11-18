import { forLogin, forAdmin, quizMany } from '../routes';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICredentials } from 'src/app/auth/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  currentLoggedUser = '';

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isTokenValid(): Observable<any> {
    return this.http.get(quizMany);
  }

  login(credentials: ICredentials): Observable<any> {
    const body = { email: credentials.email, password: credentials.password };
    return this.http.post(forLogin, body);
  }

  register(credentials: ICredentials): Observable<any> {
    const body = {
      name: credentials.email,
      email: credentials.email,
      password: credentials.password
    };
    return this.http.post(forAdmin, body);
  }
}
