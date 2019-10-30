import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegationTypesComponent } from './delegation-types.component';

describe('DelegationTypesComponent', () => {
  let component: DelegationTypesComponent;
  let fixture: ComponentFixture<DelegationTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelegationTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegationTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
