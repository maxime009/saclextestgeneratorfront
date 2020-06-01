import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnThemeComponent } from './un-theme.component';

describe('UnThemeComponent', () => {
  let component: UnThemeComponent;
  let fixture: ComponentFixture<UnThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
