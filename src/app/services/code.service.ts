import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../models/code.model';

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  private apiUrl = 'http://localhost:8081/api/v1/codes';

  constructor(private http: HttpClient) { }

  getCodes(): Observable<Code[]> {
    return this.http.get<Code[]>(this.apiUrl);
  }

  getCodeById(id: number): Observable<Code> {
    return this.http.get<Code>(`${this.apiUrl}/${id}`);
  }

  createCode(code: Code): Observable<Code> {
    return this.http.post<Code>(this.apiUrl, code);
  }

  updateCode(id: number, code: Code): Observable<Code> {
    return this.http.put<Code>(`${this.apiUrl}/${id}`, code);
  }

  deleteCode(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
