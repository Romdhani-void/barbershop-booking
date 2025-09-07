import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarPublic } from '../../../shared/navbar-public/navbar-public';

@Component({
  standalone: true,
  selector: 'app-public-layout',
  imports: [RouterOutlet, NavbarPublic],
  template: `
    <app-navbar-public></app-navbar-public>
    <main>
      <router-outlet />
    </main>
  `,
})
export class PublicLayout {}
