import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberCard } from './barber-card';

describe('BarberCard', () => {
  let component: BarberCard;
  let fixture: ComponentFixture<BarberCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
