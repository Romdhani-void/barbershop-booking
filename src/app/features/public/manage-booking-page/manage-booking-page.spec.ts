import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookingPage } from './manage-booking-page';

describe('ManageBookingPage', () => {
  let component: ManageBookingPage;
  let fixture: ComponentFixture<ManageBookingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageBookingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageBookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
