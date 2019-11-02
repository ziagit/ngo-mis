import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalSelfAssessmentsComponent } from './internal-self-assessments.component';

describe('InternalSelfAssessmentsComponent', () => {
  let component: InternalSelfAssessmentsComponent;
  let fixture: ComponentFixture<InternalSelfAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalSelfAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalSelfAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
