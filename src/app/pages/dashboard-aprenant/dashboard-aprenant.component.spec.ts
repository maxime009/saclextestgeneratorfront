import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAprenantComponent } from './dashboard-aprenant.component';

describe('DashboardAprenantComponent', () => {
  let component: DashboardAprenantComponent;
  let fixture: ComponentFixture<DashboardAprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
