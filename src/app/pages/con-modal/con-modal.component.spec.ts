import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConModalComponent } from './con-modal.component';

describe('ConModalComponent', () => {
  let component: ConModalComponent;
  let fixture: ComponentFixture<ConModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
