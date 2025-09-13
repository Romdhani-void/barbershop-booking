// src/app/features/public/booking-page/booking-page.ts
import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

import { StepSelectBarber } from './step-select-barber/step-select-barber';
import { StepSelectService } from './step-select-service/step-select-service';
import { StepPickTime } from './step-pick-time/step-pick-time';
import { StepCustomerInfo } from './step-customer-info/step-customer-info';
import { StepReviewConfirm } from './step-review-confirm/step-review-confirm';
import { Auth } from '../../../core/services/auth';

@Component({
  standalone: true,
  selector: 'app-booking-page',
  imports: [
    StepSelectBarber,
    StepSelectService,
    StepPickTime,
    StepCustomerInfo,
    StepReviewConfirm
  ],
  templateUrl: './booking-page.html',
  styleUrl: './booking-page.scss',
})
export class BookingPage {
  // wizard 1..5
  current = signal(1);

  // state
  barberId = signal<string | null>(null);
  serviceId = signal<string | null>(null);
  slot = signal<{ start: string; end: string } | null>(null);
  customer = signal<{ name: string; email: string; phone: string } | null>(null);

  // toast
  toastVisible = signal(false);
  toastText = signal('');

  // DI
  private router = inject(Router);
  private auth = inject(Auth);

  // guards
  canNext(): boolean {
    switch (this.current()) {
      case 1: return !!this.barberId();
      case 2: return !!this.serviceId();
      case 3: return !!this.slot();
      case 4: return !!this.customer();
      default: return true;
    }
  }

  next() { if (this.current() < 5 && this.canNext()) this.current.update(s => s + 1); }
  back() { if (this.current() > 1) this.current.update(s => s - 1); }
  goTo(step: number) { if (step >= 1 && step <= this.current()) this.current.set(step); }

  get summary() {
    return {
      barberId: this.barberId(),
      serviceId: this.serviceId(),
      slot: this.slot(),
      customer: this.customer(),
    };
  }

  // review -> confirm
  onConfirm() {
    this.showToast('✅ Booking confirmed');
    const isLogged = this.auth?.isLoggedIn?.() ?? false;
    const guestRedirect = '/';
    const customerRedirect = '/';
    setTimeout(() => {
      this.hideToast();
      this.router.navigateByUrl(isLogged ? customerRedirect : guestRedirect);
    }, 1200);
  }

  private showToast(text: string) { this.toastText.set(text); this.toastVisible.set(true); }
  private hideToast() { this.toastVisible.set(false); this.toastText.set(''); }
}
