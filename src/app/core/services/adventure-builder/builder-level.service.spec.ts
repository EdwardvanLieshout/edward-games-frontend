import { TestBed } from '@angular/core/testing';

import { BuilderLevelService } from './builder-level.service';

describe('BuilderLevelService', () => {
  let service: BuilderLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
