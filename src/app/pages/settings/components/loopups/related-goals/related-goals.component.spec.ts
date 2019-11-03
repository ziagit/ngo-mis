import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGoalsComponent } from './related-goals.component';

describe('RelatedGoalsComponent', () => {
  let component: RelatedGoalsComponent;
  let fixture: ComponentFixture<RelatedGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
