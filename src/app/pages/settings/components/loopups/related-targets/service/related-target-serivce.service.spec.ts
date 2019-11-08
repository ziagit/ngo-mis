import { TestBed } from '@angular/core/testing';

import { RelatedTargetSerivceService } from './related-target-serivce.service';

describe('RelatedTargetSerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelatedTargetSerivceService = TestBed.get(RelatedTargetSerivceService);
    expect(service).toBeTruthy();
  });
});
