import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  language: string;
  timezone: string;
  marketing: boolean;
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss'
})
export class ProfilePage {
  private router = inject(Router);

  // Demo user (swap with API)
  private user = signal<UserProfile>({
    fullName: 'Dali Romdhani',
    email: 'dali@example.com',
    phone: '+36 30 123 4567',
    language: 'en',
    timezone: 'Europe/Budapest',
    marketing: true
  });

  // Strongly-typed, non-nullable form (no empty interface)
  form = new FormGroup<{
    fullName: FormControl<string>;
    email: FormControl<string>;
    phone: FormControl<string>;
    language: FormControl<string>;
    timezone: FormControl<string>;
    marketing: FormControl<boolean>;
  }>({
    fullName: new FormControl<string>(this.user().fullName, {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(2)]
    }),
    email: new FormControl<string>({ value: this.user().email, disabled: true }, {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    phone: new FormControl<string>(this.user().phone, { nonNullable: true }),
    language: new FormControl<string>(this.user().language, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    timezone: new FormControl<string>(this.user().timezone, {
      nonNullable: true,
      validators: [Validators.required]
    }),
    marketing: new FormControl<boolean>(this.user().marketing, { nonNullable: true })
  });

  saving = signal(false);

  initials = computed(() => {
    const n = this.form.getRawValue().fullName.trim();
    return n.split(/\s+/).slice(0, 2).map(s => s[0]?.toUpperCase() ?? '').join('');
  });

  async save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    try {
      const payload: UserProfile = { ...this.form.getRawValue(), email: this.user().email };
      // TODO: await api.updateProfile(payload)
      await new Promise(r => setTimeout(r, 400)); // demo latency
      this.user.set(payload);
    } finally {
      this.saving.set(false);
    }
  }

  reset() {
    const u = this.user();
    this.form.setValue({
      fullName: u.fullName,
      email: u.email,
      phone: u.phone,
      language: u.language,
      timezone: u.timezone,
      marketing: u.marketing
    });
    this.form.controls.email.disable({ emitEvent: false });
  }

  changePassword() {
    this.router.navigate(['/auth/change-password']);
  }
}
