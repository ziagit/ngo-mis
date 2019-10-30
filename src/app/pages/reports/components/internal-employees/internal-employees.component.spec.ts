import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalEmployeesComponent } from './internal-employees.component';

describe('InternalEmployeesComponent', () => {
  let component: InternalEmployeesComponent;
  let fixture: ComponentFixture<InternalEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
