import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResponsableThemeComponent } from './dashboard-responsable-theme.component';

describe('DashboardResponsableThemeComponent', () => {
  let component: DashboardResponsableThemeComponent;
  let fixture: ComponentFixture<DashboardResponsableThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResponsableThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResponsableThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
