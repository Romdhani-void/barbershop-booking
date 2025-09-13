import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from './api.tokens';
import { ServiceItemDto } from './types';

@Injectable({ providedIn: 'root' })
export class ServiceCatalog {
  private http = inject(HttpClient);
  private base = inject(API_URL);
  private json = { responseType: 'json' as const };

  list(barberId?: string): Observable<ServiceItemDto[]> {
    const params = barberId ? new HttpParams({ fromObject: { barberId } }) : undefined;
    return this.http.get<ServiceItemDto[]>(`${this.base}/services`, { params, ...this.json });
  }
}
