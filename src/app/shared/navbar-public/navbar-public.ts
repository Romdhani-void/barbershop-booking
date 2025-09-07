import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-public',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-public.html',
  styleUrls: ['./navbar-public.scss'],
})
export class NavbarPublic {}
