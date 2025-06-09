import { TestBed } from '@angular/core/testing';

import { PreparserService } from './preparser.service';

describe('PreparserService', () => {
  let service: PreparserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreparserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
