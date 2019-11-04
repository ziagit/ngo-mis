import { TestBed } from '@angular/core/testing';

import { RefreshEmpTypeService } from './refresh-emp-type.service';

describe('RefreshEmpTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshEmpTypeService = TestBed.get(RefreshEmpTypeService);
    expect(service).toBeTruthy();
  });
});
