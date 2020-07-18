import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeResponsableComponent } from './theme-responsable.component';

describe('ThemeResponsableComponent', () => {
  let component: ThemeResponsableComponent;
  let fixture: ComponentFixture<ThemeResponsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeResponsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
