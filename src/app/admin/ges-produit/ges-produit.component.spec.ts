import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesProduitComponent } from './ges-produit.component';

describe('GesProduitComponent', () => {
  let component: GesProduitComponent;
  let fixture: ComponentFixture<GesProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
