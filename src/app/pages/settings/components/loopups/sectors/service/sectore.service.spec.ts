import { TestBed } from '@angular/core/testing';

import { SectoreService } from './sectore.service';

describe('SectoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectoreService = TestBed.get(SectoreService);
    expect(service).toBeTruthy();
  });
});
