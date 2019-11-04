import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRelatedGoalComponent } from './edit-related-goal.component';

describe('EditRelatedGoalComponent', () => {
  let component: EditRelatedGoalComponent;
  let fixture: ComponentFixture<EditRelatedGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRelatedGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRelatedGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
