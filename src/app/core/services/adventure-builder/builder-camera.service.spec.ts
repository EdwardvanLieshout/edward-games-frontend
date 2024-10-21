import { TestBed } from '@angular/core/testing';

import { BuilderCameraService } from './builder-camera.service';

describe('BuilderCameraService', () => {
  let service: BuilderCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
