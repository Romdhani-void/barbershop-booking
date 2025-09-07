import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepReviewConfirm } from './step-review-confirm';

describe('StepReviewConfirm', () => {
  let component: StepReviewConfirm;
  let fixture: ComponentFixture<StepReviewConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepReviewConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepReviewConfirm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
