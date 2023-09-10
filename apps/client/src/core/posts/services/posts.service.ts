import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '@ehc/common/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Post[]>  {
    return this.http.get<Post[]>('/api/posts');
  }

  fetchByThread(threadId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`/api/posts/thread/${threadId}?author=true&comments=true`);
  }
}
