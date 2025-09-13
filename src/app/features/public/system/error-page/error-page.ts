import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-error-page',
  template: `
    <section style="padding:2rem; text-align:center;">
      <h1>Error</h1>
      <p>Reason: {{ reason }}</p>
    </section>
  `,
})
export class ErrorPage {
  private route = inject(ActivatedRoute);
  reason = this.route.snapshot.queryParamMap.get('reason');
}
