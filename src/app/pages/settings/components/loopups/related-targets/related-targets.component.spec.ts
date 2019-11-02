import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTargetsComponent } from './related-targets.component';

describe('RelatedTargetsComponent', () => {
  let component: RelatedTargetsComponent;
  let fixture: ComponentFixture<RelatedTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
