import { Component, signal, computed } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';

interface Booking {
  id: string;
  serviceName: string;
  barberName: string;
  startsAt: Date;
  durationMin: number;
  priceHUF: number;
  location: string;
}

@Component({
  selector: 'app-my-bookings-page',
  standalone: true,
  imports: [CommonModule, DatePipe, CurrencyPipe],
  templateUrl: './my-bookings-page.html',
  styleUrl: './my-bookings-page.scss'
})
export class MyBookingsPage {
  bookings = signal<Booking[]>([
    {
      id: 'BKG-010',
      serviceName: 'Haircut + Beard Trim',
      barberName: 'Máté',
      startsAt: this.addHours(26),
      durationMin: 45,
      priceHUF: 8900,
      location: 'Budapest, District VII'
    }
  ]);

  upcoming = computed(() =>
    this.bookings().sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())[0]
  );

  cancel(b: Booking) {
    console.log('Cancelled booking', b.id);
    this.bookings.set([]);
  }

  private addHours(h: number) {
    const d = new Date();
    d.setHours(d.getHours() + h);
    return d;
  }
}
