import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThemeParUserComponent } from './list-theme-par-user.component';

describe('ListThemeParUserComponent', () => {
  let component: ListThemeParUserComponent;
  let fixture: ComponentFixture<ListThemeParUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThemeParUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThemeParUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
