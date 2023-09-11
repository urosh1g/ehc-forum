import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@ehc/common/entities';
import { Observable } from 'rxjs';
import { CreateUser } from '@ehc/common/dtos';

export interface AuthResponse  {
  user: User,
  access_token: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(alias: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/login', { alias, password });
  }
  register(user: CreateUser): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/api/auth/register', user);
  }
}
