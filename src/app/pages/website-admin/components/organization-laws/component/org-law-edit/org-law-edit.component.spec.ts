import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLawEditComponent } from './org-law-edit.component';

describe('OrgLawEditComponent', () => {
  let component: OrgLawEditComponent;
  let fixture: ComponentFixture<OrgLawEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgLawEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLawEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
