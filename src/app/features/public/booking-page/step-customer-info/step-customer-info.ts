import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

// literals as readonly
export const STEP_CUSTOMER_SELECTOR = 'app-step-customer-info' as const;
export const STEP_CUSTOMER_TEMPLATE_URL = './step-customer-info.html' as const;
export const STEP_CUSTOMER_STYLE_URL = './step-customer-info.scss' as const;

@Component({
  standalone: true,
  selector: STEP_CUSTOMER_SELECTOR,
  imports: [FormsModule],
  templateUrl: STEP_CUSTOMER_TEMPLATE_URL,
  styleUrl: STEP_CUSTOMER_STYLE_URL,
})
export class StepCustomerInfo {
  @Output() completed = new EventEmitter<{ name: string; email: string; phone: string }>();

  submit(f: NgForm) {
    if (f.valid) {
      this.completed.emit(f.value);
    } else {
      f.form.markAllAsTouched();
    }
  }
}
