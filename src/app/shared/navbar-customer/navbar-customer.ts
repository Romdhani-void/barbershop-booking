import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-navbar-customer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-customer.html',
  styleUrls: ['./navbar-customer.scss'],
})
export class NavbarCustomer {}
