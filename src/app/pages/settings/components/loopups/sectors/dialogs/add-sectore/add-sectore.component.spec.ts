import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectoreComponent } from './add-sectore.component';

describe('AddSectoreComponent', () => {
  let component: AddSectoreComponent;
  let fixture: ComponentFixture<AddSectoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
