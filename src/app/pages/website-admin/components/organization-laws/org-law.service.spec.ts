import { TestBed } from '@angular/core/testing';

import { OrgLawService } from './org-law.service';

describe('OrgLawService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrgLawService = TestBed.get(OrgLawService);
    expect(service).toBeTruthy();
  });
});
