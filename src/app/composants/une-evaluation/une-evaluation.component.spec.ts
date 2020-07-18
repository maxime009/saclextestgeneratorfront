import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UneEvaluationComponent } from './une-evaluation.component';

describe('UneEvaluationComponent', () => {
  let component: UneEvaluationComponent;
  let fixture: ComponentFixture<UneEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UneEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UneEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
