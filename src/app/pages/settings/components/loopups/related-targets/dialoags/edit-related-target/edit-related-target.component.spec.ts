import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRelatedTargetComponent } from './edit-related-target.component';

describe('EditRelatedTargetComponent', () => {
  let component: EditRelatedTargetComponent;
  let fixture: ComponentFixture<EditRelatedTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRelatedTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRelatedTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
