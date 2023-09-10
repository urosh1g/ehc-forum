import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thread } from '@ehc/common/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Thread[]> {
    return this.http.get<Thread[]>('/api/threads?posts=true&categories=true');
  }
}
