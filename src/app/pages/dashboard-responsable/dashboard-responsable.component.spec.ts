import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResponsableComponent } from './dashboard-responsable.component';

describe('DashboardResponsableComponent', () => {
  let component: DashboardResponsableComponent;
  let fixture: ComponentFixture<DashboardResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
