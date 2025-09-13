import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './auth-page.html',
  styleUrls: ['./auth-page.scss'],
})
export class AuthPage {
  email = '';
  password = '';

  submit(): void {
    // dev-only no-op
  }
  demo(): void {
    // dev-only no-op
  }
}
