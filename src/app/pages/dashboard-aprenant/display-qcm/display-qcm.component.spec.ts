import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayQCMComponent } from './display-qcm.component';

describe('DisplayQCMComponent', () => {
  let component: DisplayQCMComponent;
  let fixture: ComponentFixture<DisplayQCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayQCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
