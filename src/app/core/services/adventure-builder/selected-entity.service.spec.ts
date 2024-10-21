import { TestBed } from '@angular/core/testing';

import { SelectedEntityService } from './selected-entity.service';

describe('SelectedEntityService', () => {
  let service: SelectedEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
