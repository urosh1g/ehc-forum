import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '@ehc/common/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Comment[]> {
    return this.http.get<Comment[]>('/api/comments?author=true');
  }

  fetchByPost(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`/api/comments/post/${postId}?author=true`);
  }
}
