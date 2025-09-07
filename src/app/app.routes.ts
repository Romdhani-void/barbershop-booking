import { Routes } from '@angular/router';

// Layouts
import { PublicLayout } from './core/layouts/public-layout/public-layout';
import { CustomerLayout } from './core/layouts/customer-layout/customer-layout';
import { BarberLayout } from './core/layouts/barber-layout/barber-layout';
import { AdminLayout } from './core/layouts/admin-layout/admin-layout';

// System pages
import { NotFoundPage } from './features/public/system/not-found-page/not-found-page';
import { ErrorPage } from './features/public/system/error-page/error-page';

export const routes: Routes = [
  // Public area
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/public/landing-page/landing-page').then((m) => m.LandingPage),
      },
      {
        path: 'prices',
        loadComponent: () =>
          import('./features/public/prices-page/prices-page').then((m) => m.PricesPage),
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./features/public/auth-page/auth-page').then((m) => m.AuthPage),
      },
      {
        path: 'booking',
        loadComponent: () =>
          import('./features/public/booking-page/booking-page').then((m) => m.BookingPage),
      },
      {
        path: 'manage',
        loadComponent: () =>
          import('./features/public/manage-booking-page/manage-booking-page').then(
            (m) => m.ManageBookingPage
          ),
      },
      {
        path: 'barbers/:id',
        loadComponent: () =>
          import('./features/public/barber-public-page/barber-public-page').then(
            (m) => m.BarberPublicPage
          ),
      },
    ],
  },

  // Customer area
  {
    path: 'me',
    component: CustomerLayout,
    children: [
      {
        path: 'bookings',
        loadComponent: () =>
          import('./features/customer/my-bookings-page/my-bookings-page').then(
            (m) => m.MyBookingsPage
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./features/customer/profile-page/profile-page').then((m) => m.ProfilePage),
      },
      {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () =>
          import('./features/public/landing-page/landing-page').then((m) => m.LandingPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'bookings' },
    ],
  },

  // Barber area
  {
    path: 'barber',
    component: BarberLayout,
    children: [
      {
        path: 'agenda',
        loadComponent: () =>
          import('./features/barber/agenda-page/agenda-page').then((m) => m.AgendaPage),
      },
      {
        path: 'requests',
        loadComponent: () =>
          import('./features/barber/requests-page/requests-page').then((m) => m.RequestsPage),
      },
      {
        path: 'earnings',
        loadComponent: () =>
          import('./features/barber/earnings-page/earnings-page').then((m) => m.EarningsPage),
      },
      {
        path: 'onboarding',
        loadComponent: () =>
          import('./features/barber/onboarding-page/onboarding-page').then((m) => m.OnboardingPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'agenda' },
    ],
  },

  // Admin/Owner area
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      {
        path: 'management',
        loadComponent: () =>
          import('./features/admin/management-page/management-page').then((m) => m.ManagementPage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/admin/settings-page/settings-page').then((m) => m.SettingsPage),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/admin/reports-page/reports-page').then((m) => m.ReportsPage),
      },
      { path: '', pathMatch: 'full', redirectTo: 'management' },
    ],
  },

  // System
  { path: 'error', component: ErrorPage },
  { path: '**', component: NotFoundPage },
];
