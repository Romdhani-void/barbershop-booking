import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './api.tokens';
import { BarberDto } from './types';

@Injectable({ providedIn: 'root' })
export class Barber {
  private http = inject(HttpClient);
  private base = inject(API_URL);

  list(): Observable<BarberDto[]> {
    return this.http.get<BarberDto[]>(`${this.base}/barbers`);
  }

  get(id: string): Observable<BarberDto> {
    return this.http.get<BarberDto>(`${this.base}/barbers/${id}`);
  }
}
