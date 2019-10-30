import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentTypesComponent } from './assessment-types.component';

describe('AssessmentTypesComponent', () => {
  let component: AssessmentTypesComponent;
  let fixture: ComponentFixture<AssessmentTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
