import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologEmpTypeComponent } from './diolog-emp-type.component';

describe('DiologEmpTypeComponent', () => {
  let component: DiologEmpTypeComponent;
  let fixture: ComponentFixture<DiologEmpTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiologEmpTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiologEmpTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
