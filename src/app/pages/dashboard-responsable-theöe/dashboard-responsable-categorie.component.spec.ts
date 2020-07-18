import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResponsableCategorieComponent } from './dashboard-responsable-categorie.component';

describe('DashboardResponsableCategorieComponent', () => {
  let component: DashboardResponsableCategorieComponent;
  let fixture: ComponentFixture<DashboardResponsableCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResponsableCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResponsableCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
