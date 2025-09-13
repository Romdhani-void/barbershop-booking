import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSelectBarber } from './step-select-barber';

describe('StepSelectBarber', () => {
  let component: StepSelectBarber;
  let fixture: ComponentFixture<StepSelectBarber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSelectBarber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSelectBarber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
