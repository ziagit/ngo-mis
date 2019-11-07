import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRelatedTargetComponent } from './add-related-target.component';

describe('AddRelatedTargetComponent', () => {
  let component: AddRelatedTargetComponent;
  let fixture: ComponentFixture<AddRelatedTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRelatedTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRelatedTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
