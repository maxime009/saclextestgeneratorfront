import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsModalComponent } from './ins-modal.component';

describe('InsModalComponent', () => {
  let component: InsModalComponent;
  let fixture: ComponentFixture<InsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
