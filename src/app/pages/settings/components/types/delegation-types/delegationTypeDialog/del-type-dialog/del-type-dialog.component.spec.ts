import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelTypeDialogComponent } from './del-type-dialog.component';

describe('DelTypeDialogComponent', () => {
  let component: DelTypeDialogComponent;
  let fixture: ComponentFixture<DelTypeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelTypeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
