import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComingSoonComponent } from './page-coming-soon.component';

describe('PageComingSoonComponent', () => {
  let component: PageComingSoonComponent;
  let fixture: ComponentFixture<PageComingSoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageComingSoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
