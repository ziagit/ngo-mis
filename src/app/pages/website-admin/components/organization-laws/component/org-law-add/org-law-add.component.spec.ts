import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLawAddComponent } from './org-law-add.component';

describe('OrgLawAddComponent', () => {
  let component: OrgLawAddComponent;
  let fixture: ComponentFixture<OrgLawAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgLawAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLawAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
