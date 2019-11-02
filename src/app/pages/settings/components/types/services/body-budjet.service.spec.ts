import { TestBed } from '@angular/core/testing';

import { BodyBudjetService } from './body-budjet.service';

describe('BodyBudjetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodyBudjetService = TestBed.get(BodyBudjetService);
    expect(service).toBeTruthy();
  });
});
