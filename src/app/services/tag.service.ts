import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private apiUrl = 'http://localhost:8081/api/v1/tags';

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  getTagById(id: number): Observable<Tag> {
    return this.http.get<Tag>(`${this.apiUrl}/${id}`);
  }

  createTag(tag: Tag): Observable<Tag> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Tag>(this.apiUrl, tag, { headers });
  }

  updateTag(id: number, tag: Tag): Observable<Tag> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Tag>(`${this.apiUrl}/${id}`, tag, { headers });
  }

  deleteTag(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
