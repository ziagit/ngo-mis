import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgTypeDiologComponent } from './edit-org-type-diolog.component';

describe('EditOrgTypeDiologComponent', () => {
  let component: EditOrgTypeDiologComponent;
  let fixture: ComponentFixture<EditOrgTypeDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrgTypeDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrgTypeDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
