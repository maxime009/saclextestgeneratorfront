import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterResponsableCategorieComponent } from './ajouter-responsable-categorie.component';

describe('AjouterResponsableCategorieComponent', () => {
  let component: AjouterResponsableCategorieComponent;
  let fixture: ComponentFixture<AjouterResponsableCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterResponsableCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterResponsableCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
