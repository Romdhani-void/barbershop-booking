import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberPublicPage } from './barber-public-page';

describe('BarberPublicPage', () => {
  let component: BarberPublicPage;
  let fixture: ComponentFixture<BarberPublicPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarberPublicPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarberPublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
