import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberLayout } from './barber-layout';

describe('BarberLayout', () => {
  let component: BarberLayout;
  let fixture: ComponentFixture<BarberLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
