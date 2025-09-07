import { InjectionToken } from '@angular/core';
export const API_URL = new InjectionToken<string>('API_URL', {
  factory: () => 'http://localhost:3000', // change when backend is ready
});
