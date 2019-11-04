import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BTypeDialogComponent } from './b-type-dialog.component';

describe('BTypeDialogComponent', () => {
  let component: BTypeDialogComponent;
  let fixture: ComponentFixture<BTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
