import { Injectable } from '@angular/core';

export type AppRole = 'customer' | 'barber' | 'admin' | 'owner' | null;

/**
 * DEV-ONLY STUB: Minimal Auth service so components that import it will compile.
 * It does not enforce real authentication.
 */
@Injectable({ providedIn: 'root' })
export class Auth {
  private role: Exclude<AppRole, null> = 'customer';

  isLoggedIn(): boolean {
    return true; // always logged in
  }

  currentRole(): AppRole {
    return this.role;
  }

  currentEmail(): string | null {
    return 'demo@example.com';
  }

  login(): boolean {
    return true; // no-op
  }

  logout(): void {
    // no-op
  }

  mockLogin(role: Exclude<AppRole, null> = 'customer'): void {
    this.role = role;
  }

  getAuthHeader(): string | null {
    return `Bearer demo.${this.role}`;
  }
}
