import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSelectService } from './step-select-service';

describe('StepSelectService', () => {
  let component: StepSelectService;
  let fixture: ComponentFixture<StepSelectService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepSelectService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepSelectService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
