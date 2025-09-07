import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-step-select-service',
  templateUrl: './step-select-service.html',
  styleUrl: './step-select-service.scss'
})
export class StepSelectService {
  @Input({ required: true }) barberId: string | null = null;
  @Output() selected = new EventEmitter<string>();
  choose(id: string) { this.selected.emit(id); }
}
