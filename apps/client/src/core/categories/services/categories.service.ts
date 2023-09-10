import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@ehc/common/entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  fetchAll(): Observable<Category[]> {
    return this.http.get<Category[]>('/api/categories');
  }
}
