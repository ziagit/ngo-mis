import { TestBed } from '@angular/core/testing';

import { RelatedGoalServiceService } from './related-goal-service.service';

describe('RelatedGoalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelatedGoalServiceService = TestBed.get(RelatedGoalServiceService);
    expect(service).toBeTruthy();
  });
});
