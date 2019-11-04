import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquiptTypeComponent } from './add-equipt-type.component';

describe('AddEquiptTypeComponent', () => {
  let component: AddEquiptTypeComponent;
  let fixture: ComponentFixture<AddEquiptTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEquiptTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEquiptTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
