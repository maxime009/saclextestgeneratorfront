import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixExclusifComponent } from './choix-exclusif.component';

describe('ChoixExclusifComponent', () => {
  let component: ChoixExclusifComponent;
  let fixture: ComponentFixture<ChoixExclusifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixExclusifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixExclusifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
