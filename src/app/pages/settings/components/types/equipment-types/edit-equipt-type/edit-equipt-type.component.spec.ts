import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEquiptTypeComponent } from './edit-equipt-type.component';

describe('EditEquiptTypeComponent', () => {
  let component: EditEquiptTypeComponent;
  let fixture: ComponentFixture<EditEquiptTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEquiptTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEquiptTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
