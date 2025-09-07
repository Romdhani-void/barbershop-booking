import { Component, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';

/* Data contracts */
interface SidePanel { title: string; blurb: string; }
interface Hero { title: string; highlight?: string; price: string; duration?: string; image: string; }
interface Slide { hero: Hero; left: SidePanel; right: SidePanel; }
interface ServiceItem { name: string; duration: string; price: string; }

type Dir = 'next' | 'prev';

@Component({
  selector: 'app-prices-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prices-page.html',
  styleUrls: ['./prices-page.scss'],
})
export class PricesPage implements OnInit, OnDestroy {
  /* Platform */
  private readonly platformId = inject(PLATFORM_ID);
  readonly isBrowser = isPlatformBrowser(this.platformId);

  /* UI state */
  currentIndex = 0;          // (was: number)
  lastDir: Dir = 'next';
  isPaused = false;          // (was: boolean)

  /* Config */
  private readonly autoplayMs = 2600;        // (was: number)
  private readonly restartOnManualNav = true; // (was: boolean)
  readonly loop = true;                       // (was: boolean)

  /* Timers */
  private timerId: ReturnType<typeof setInterval> | null = null;

  /* Slides data */
  slides: Slide[] = [
    {
      hero: { title: 'RELAXING', highlight: 'TREATMENT', price: 'HUF 2,800', duration: '40 min', image: 'assets/images/anti-dwarf.png' },
      left: { title: 'SCALP THERAPY', blurb: 'Deep cleanse + tonic to reduce flaking and soothe skin.' },
      right:{ title: 'NECK MASSAGE',  blurb: 'Pressure points to relieve tension and boost circulation.' }
    },
    {
      hero: { title: 'BEARD SHAPE &', highlight: 'HOT TOWEL', price: 'HUF 5,600', duration: '25 min', image: 'assets/images/anti-dwarf2.png' },
      left: { title: 'CLEAN CONTOURS', blurb: 'Symmetry first. Sharp edges without irritation.' },
      right:{ title: 'FINISHING BALM', blurb: 'Natural hold with a subtle sheen.' }
    },
    {
      hero: { title: 'STYLISH CUTS FOR', highlight: 'ALL', price: 'HUF 5,800', duration: '30 min', image: 'assets/images/anti-dwarf3.png' },
      left: { title: 'PRECISION LINE-UP', blurb: 'Razor finish and hot towel prep for crisp, lasting lines.' },
      right:{ title: 'PREMIUM OILS',     blurb: 'Conditioning blend to soften and add shine.' }
    },
    {
      hero: { title: 'KIDS', highlight: 'CUT', price: 'HUF 5,100', duration: '30 min', image: 'assets/images/anti-dwarf4.png' },
      left: { title: 'GENTLE APPROACH', blurb: 'Short sessions, calm pacing, patient guidance.' },
      right:{ title: 'PHOTO-READY',     blurb: 'Clean edges and tidy finish for school events.' }
    }
  ];

  /* Services */
  services: ServiceItem[] = [
    { name: 'Haircut (Fade)', duration: '30 min', price: 'HUF 5,800' },
    { name: 'Haircut + Beard Trim', duration: '45 min', price: 'HUF 8,900' },
    { name: 'Beard Trim', duration: '30 min', price: 'HUF 4,700' },
    { name: 'Dad and Son Cut', duration: '60 min', price: 'HUF 10,600' },
    { name: 'Head Shave', duration: '30 min', price: 'HUF 4,700' },
    { name: 'Kid Cut (up to 4 years old)', duration: '30 min', price: 'HUF 5,100' },
    { name: 'Same Length Haircut (Clipper only)', duration: '15 min', price: 'HUF 3,400' },
    { name: 'Same Length Haircut + Beard Trim (Clipper only)', duration: '30 min', price: 'HUF 5,400' },
    { name: 'Wash – Dry – Finish', duration: '15 min', price: 'HUF 1,900' },
    { name: 'Full Shave', duration: '30 min', price: 'HUF 5,600' },
    { name: 'Haircut (Long Hair, with Scissors)', duration: '60 min', price: 'HUF 8,000' },
    { name: 'Same Length Haircut + Beard Trim', duration: '45 min', price: 'HUF 7,700' },
    { name: 'Bring a Friend Offer', duration: '60 min', price: 'HUF 10,440' }
  ];

  /* Lifecycle */
  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.startAutoplay();
    document.addEventListener('visibilitychange', this.handleVisibility);
    window.addEventListener('blur', this.pause);
    window.addEventListener('focus', this.resume);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    if (!this.isBrowser) return;
    document.removeEventListener('visibilitychange', this.handleVisibility);
    window.removeEventListener('blur', this.pause);
    window.removeEventListener('focus', this.resume);
  }

  /* Controls */
  prev(): void {
    if (this.currentIndex === 0) {
      if (this.loop) { this.lastDir = 'prev'; this.currentIndex = this.slides.length - 1; this.afterManual(); }
      return;
    }
    this.lastDir = 'prev';
    this.currentIndex--;
    this.afterManual();
  }

  next(): void {
    if (this.currentIndex >= this.slides.length - 1) {
      if (this.loop) { this.lastDir = 'next'; this.currentIndex = 0; this.afterManual(); }
      return;
    }
    this.lastDir = 'next';
    this.currentIndex++;
    this.afterManual();
  }

  goTo(index: number): void {
    const clamped = Math.max(0, Math.min(index, this.slides.length - 1));
    this.lastDir = clamped > this.currentIndex ? 'next' : clamped < this.currentIndex ? 'prev' : this.lastDir;
    this.currentIndex = clamped;
    this.afterManual();
  }

  /* Pause/Resume */
  pause = (): void => { if (!this.isBrowser) return; this.isPaused = true; this.stopAutoplay(); };
  resume = (): void => { if (!this.isBrowser) return; this.isPaused = false; this.startAutoplay(); };

  /* Autoplay internals */
  private handleVisibility = (): void => {
    if (document.hidden) this.stopAutoplay();
    else if (!this.isPaused) this.startAutoplay();
  };

  private startAutoplay(): void {
    if (!this.isBrowser || this.timerId !== null || this.isPaused) return;
    this.timerId = setInterval(() => { this.next(); }, this.autoplayMs);
  }

  private stopAutoplay(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private afterManual(): void {
    if (this.isBrowser && this.restartOnManualNav) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
