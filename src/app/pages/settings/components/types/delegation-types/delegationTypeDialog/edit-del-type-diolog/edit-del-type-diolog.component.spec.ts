import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelTypeDiologComponent } from './edit-del-type-diolog.component';

describe('EditDelTypeDiologComponent', () => {
  let component: EditDelTypeDiologComponent;
  let fixture: ComponentFixture<EditDelTypeDiologComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelTypeDiologComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelTypeDiologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
