import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConsulterModiferComponent } from './delete-consulter-modifer.component';

describe('DeleteConsulterModiferComponent', () => {
  let component: DeleteConsulterModiferComponent;
  let fixture: ComponentFixture<DeleteConsulterModiferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConsulterModiferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConsulterModiferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
