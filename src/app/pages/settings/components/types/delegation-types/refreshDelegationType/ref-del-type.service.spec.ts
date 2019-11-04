import { TestBed } from '@angular/core/testing';

import { RefDelTypeService } from './ref-del-type.service';

describe('RefDelTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefDelTypeService = TestBed.get(RefDelTypeService);
    expect(service).toBeTruthy();
  });
});
