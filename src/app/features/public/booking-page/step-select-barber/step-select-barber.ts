import { Component, EventEmitter, Output, signal, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-step-select-barber',
  templateUrl: './step-select-barber.html',
  styleUrl: './step-select-barber.scss',
})
export class StepSelectBarber implements OnInit {
  @Output() selected = new EventEmitter<string>();

  loading = signal(true);
  error = signal<string | null>(null);
  barbers = signal<{ id: string; name: string; specialties: string[]; photoUrl?: string; nextAvailable?: string }[]>([]);

  ngOnInit() {
    this.load();
  }

  // Mocked loader (replace with API when ready)
  load() {
    this.loading.set(true);
    this.error.set(null);

    setTimeout(() => {
      try {
        this.barbers.set([
          { id: '1', name: 'Zsolti', specialties: ['Fade', 'Beard'], nextAvailable: '11:30' },
          { id: '2', name: 'Máté', specialties: ['Classic Cut'], nextAvailable: '14:00' },
          { id: '3', name: 'Lilla', specialties: ['Styling'], nextAvailable: '16:00' },
        ]);
      } catch {
        this.error.set('Failed to load barbers.');
      } finally {
        this.loading.set(false);
      }
    }, 500);
  }

  choose(id: string) {
    this.selected.emit(id);
  }
}
