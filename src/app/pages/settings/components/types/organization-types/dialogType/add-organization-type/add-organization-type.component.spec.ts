import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationTypeComponent } from './add-organization-type.component';

describe('AddOrganizationTypeComponent', () => {
  let component: AddOrganizationTypeComponent;
  let fixture: ComponentFixture<AddOrganizationTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
