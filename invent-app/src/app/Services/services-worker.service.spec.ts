import { TestBed } from '@angular/core/testing';

import { ServicesWorkerService } from './services-worker.service';

describe('ServicesWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesWorkerService = TestBed.get(ServicesWorkerService);
    expect(service).toBeTruthy();
  });
});
