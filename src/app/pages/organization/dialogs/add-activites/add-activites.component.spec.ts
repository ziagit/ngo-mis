import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivitesComponent } from './add-activites.component';

describe('AddActivitesComponent', () => {
  let component: AddActivitesComponent;
  let fixture: ComponentFixture<AddActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
