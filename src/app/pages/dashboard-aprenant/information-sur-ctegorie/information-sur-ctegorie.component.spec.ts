import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationSurCtegorieComponent } from './information-sur-ctegorie.component';

describe('InformationSurCtegorieComponent', () => {
  let component: InformationSurCtegorieComponent;
  let fixture: ComponentFixture<InformationSurCtegorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationSurCtegorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationSurCtegorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
