import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-step-review-confirm',
  imports: [DatePipe], // for nice date formatting
  templateUrl: './step-review-confirm.html',
  styleUrl: './step-review-confirm.scss'
})
export class StepReviewConfirm {
  @Input({ required: true }) summary!: {
    barberId: string | null;
    serviceId: string | null;
    slot: { start: string; end: string } | null;
    customer: { name: string; email: string; phone: string } | null;
  };

  @Output() confirm = new EventEmitter<void>();
  onConfirm() { this.confirm.emit(); }
}
