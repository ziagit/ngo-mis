import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpTypeComponent } from './edit-emp-type.component';

describe('EditEmpTypeComponent', () => {
  let component: EditEmpTypeComponent;
  let fixture: ComponentFixture<EditEmpTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
