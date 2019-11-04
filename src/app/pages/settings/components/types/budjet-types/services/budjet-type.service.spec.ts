import { TestBed } from '@angular/core/testing';

import { BudjetTypeService } from './budjet-type.service';

describe('BudjetTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudjetTypeService = TestBed.get(BudjetTypeService);
    expect(service).toBeTruthy();
  });
});
