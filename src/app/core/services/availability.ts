import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './api.tokens';
import { AvailabilitySlotDto } from './types';

@Injectable({ providedIn: 'root' })
export class Availability {
  private http = inject(HttpClient);
  private base = inject(API_URL);
  private json = { responseType: 'json' as const };

  slots(barberId: string, serviceId: string, date?: string): Observable<AvailabilitySlotDto[]> {
    const params = new HttpParams({
      fromObject: { serviceId, ...(date ? { date } : {}) }
    });
    return this.http.get<AvailabilitySlotDto[]>(`${this.base}/availability/${barberId}`, { params, ...this.json });
  }
}
