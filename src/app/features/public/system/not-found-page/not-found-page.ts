import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-not-found-page',
  template: `
    <section style="padding:2rem; text-align:center;">
      <h1>404</h1>
      <p>Page not found.</p>
    </section>
  `,
})
export class NotFoundPage {}
