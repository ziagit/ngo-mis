import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalSelfAssessmentsComponent } from './external-self-assessments.component';

describe('ExternalSelfAssessmentsComponent', () => {
  let component: ExternalSelfAssessmentsComponent;
  let fixture: ComponentFixture<ExternalSelfAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalSelfAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalSelfAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
