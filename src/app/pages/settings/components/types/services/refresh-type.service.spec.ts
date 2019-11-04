import { TestBed } from '@angular/core/testing';

import { RefreshTypeService } from './refresh-type.service';

describe('RefreshTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshTypeService = TestBed.get(RefreshTypeService);
    expect(service).toBeTruthy();
  });
});
