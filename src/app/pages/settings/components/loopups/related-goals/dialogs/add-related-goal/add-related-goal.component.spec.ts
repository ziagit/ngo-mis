import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelatedGoalComponent } from './add-related-goal.component';

describe('AddRelatedGoalComponent', () => {
  let component: AddRelatedGoalComponent;
  let fixture: ComponentFixture<AddRelatedGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRelatedGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRelatedGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
