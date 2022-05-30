import { TestBed } from '@angular/core/testing';

import { RouteActiveServiceService } from './route-active-service.service';

describe('RouteActiveServiceService', () => {
  let service: RouteActiveServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteActiveServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
