import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phone } from '../models/phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private apiUrl = 'http://localhost:8081/api/v1/phones';

  constructor(private http: HttpClient) { }

  getPhones(): Observable<Phone[]> {
    return this.http.get<Phone[]>(this.apiUrl);
  }

  getPhoneById(id: number): Observable<Phone> {
    return this.http.get<Phone>(`${this.apiUrl}/${id}`);
  }

  createPhone(phone: Phone): Observable<Phone> {
    return this.http.post<Phone>(this.apiUrl, phone);
  }

  updatePhone(id: number, phone: Phone): Observable<Phone> {
    return this.http.put<Phone>(`${this.apiUrl}/${id}`, phone);
  }

  deletePhone(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
