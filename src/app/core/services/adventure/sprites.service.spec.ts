import { TestBed } from '@angular/core/testing';

import { SpritesService } from './sprites.service';

describe('SpritesService', () => {
  let service: SpritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
