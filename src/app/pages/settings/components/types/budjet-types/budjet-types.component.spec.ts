import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudjetTypesComponent } from './budjet-types.component';

describe('BudjetTypesComponent', () => {
  let component: BudjetTypesComponent;
  let fixture: ComponentFixture<BudjetTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudjetTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudjetTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
