import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-step-pick-time',
  templateUrl: './step-pick-time.html',
  styleUrl: './step-pick-time.scss'
})
export class StepPickTime {
  @Input({ required: true }) barberId: string | null = null;
  @Input({ required: true }) serviceId: string | null = null;
  @Output() selected = new EventEmitter<{ start: string; end: string }>();

  pick(start: string, end: string) { this.selected.emit({ start, end }); }
}
