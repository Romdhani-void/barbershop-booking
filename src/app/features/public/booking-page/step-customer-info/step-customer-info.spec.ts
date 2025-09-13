import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepCustomerInfo } from './step-customer-info';

describe('StepCustomerInfo', () => {
  let component: StepCustomerInfo;
  let fixture: ComponentFixture<StepCustomerInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepCustomerInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepCustomerInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
