import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './api.tokens';
import { BookingCreateRequestDto, BookingCreateResponseDto } from './types';

@Injectable({ providedIn: 'root' })
export class Booking {
  private http = inject(HttpClient);
  private base = inject(API_URL);
  private json = { responseType: 'json' as const }; // ensure JSON overload

  create(req: BookingCreateRequestDto): Observable<BookingCreateResponseDto> {
    return this.http.post<BookingCreateResponseDto>(`${this.base}/bookings`, req, this.json);
  }

  cancel(id: string, reason?: string): Observable<void> {
    const params = reason ? new HttpParams({ fromObject: { reason } }) : undefined;
    return this.http.delete<void>(`${this.base}/bookings/${id}`, { params, ...this.json });
  }

  reschedule(id: string, start: string): Observable<void> {
    return this.http.patch<void>(`${this.base}/bookings/${id}`, { start }, this.json);
  }
}
