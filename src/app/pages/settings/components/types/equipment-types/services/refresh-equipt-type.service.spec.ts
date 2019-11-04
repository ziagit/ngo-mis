import { TestBed } from '@angular/core/testing';

import { RefreshEquiptTypeService } from './refresh-equipt-type.service';

describe('RefreshEquiptTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshEquiptTypeService = TestBed.get(RefreshEquiptTypeService);
    expect(service).toBeTruthy();
  });
});
