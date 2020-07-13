import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesUserComponent } from './ges-user.component';

describe('GesUserComponent', () => {
  let component: GesUserComponent;
  let fixture: ComponentFixture<GesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
