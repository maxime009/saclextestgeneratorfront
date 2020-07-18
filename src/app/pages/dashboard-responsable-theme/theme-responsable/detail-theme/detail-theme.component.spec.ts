import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailThemeComponent } from './detail-theme.component';

describe('DetailThemeComponent', () => {
  let component: DetailThemeComponent;
  let fixture: ComponentFixture<DetailThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
