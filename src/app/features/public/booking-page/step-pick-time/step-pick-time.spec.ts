import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPickTime } from './step-pick-time';

describe('StepPickTime', () => {
  let component: StepPickTime;
  let fixture: ComponentFixture<StepPickTime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPickTime]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepPickTime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
