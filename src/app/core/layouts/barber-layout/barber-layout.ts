import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-barber-layout',
  imports: [RouterOutlet],
  template: `
    <aside style="width:200px; float:left; border-right:1px solid #ddd; padding:1rem;">
      Barber Sidebar (links later)
    </aside>
    <main style="margin-left:200px; padding:1rem;">
      <router-outlet />
    </main>
  `,
})
export class BarberLayout {}
