import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBarber } from './sidebar-barber';

describe('SidebarBarber', () => {
  let component: SidebarBarber;
  let fixture: ComponentFixture<SidebarBarber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBarber]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBarber);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
