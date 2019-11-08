import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLawListComponent } from './org-law-list.component';

describe('OrgLawListComponent', () => {
  let component: OrgLawListComponent;
  let fixture: ComponentFixture<OrgLawListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgLawListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLawListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
