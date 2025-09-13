import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarCustomer } from '../../../shared/navbar-customer/navbar-customer';

@Component({
  standalone: true,
  selector: 'app-customer-layout',
  imports: [RouterOutlet, NavbarCustomer],
  template: `
    <app-navbar-customer></app-navbar-customer>
    <main>
      <router-outlet />
    </main>
  `,
})
export class CustomerLayout {}
