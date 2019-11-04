import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudjetTypeComponent } from './edit-budjet-type.component';

describe('EditBudjetTypeComponent', () => {
  let component: EditBudjetTypeComponent;
  let fixture: ComponentFixture<EditBudjetTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudjetTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudjetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
