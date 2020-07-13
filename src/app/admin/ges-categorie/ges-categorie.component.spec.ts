import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesCategorieComponent } from './ges-categorie.component';

describe('GesCategorieComponent', () => {
  let component: GesCategorieComponent;
  let fixture: ComponentFixture<GesCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
