import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTrouComponent } from './question-trou.component';

describe('QuestionTrouComponent', () => {
  let component: QuestionTrouComponent;
  let fixture: ComponentFixture<QuestionTrouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTrouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTrouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
