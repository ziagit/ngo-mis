import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectoreComponent } from './edit-sectore.component';

describe('EditSectoreComponent', () => {
  let component: EditSectoreComponent;
  let fixture: ComponentFixture<EditSectoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSectoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
