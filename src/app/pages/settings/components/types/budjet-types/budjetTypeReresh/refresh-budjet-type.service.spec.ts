import { TestBed } from '@angular/core/testing';

import { RefreshBudjetTypeService } from './refresh-budjet-type.service';

describe('RefreshBudjetTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshBudjetTypeService = TestBed.get(RefreshBudjetTypeService);
    expect(service).toBeTruthy();
  });
});
