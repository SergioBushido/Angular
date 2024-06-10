import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8081/api/v1/projects';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Project>(this.apiUrl, project, { headers });
  }

  updateProject(id: number, project: Project): Observable<Project> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Project>(`${this.apiUrl}/${id}`, project, { headers });
  }

  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
