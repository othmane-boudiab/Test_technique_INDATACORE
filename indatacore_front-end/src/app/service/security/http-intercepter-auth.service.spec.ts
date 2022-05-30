import { TestBed } from '@angular/core/testing';

import { HttpIntercepterAuthService } from './http-intercepter-auth.service';

describe('HttpIntercepterAuthService', () => {
  let service: HttpIntercepterAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpIntercepterAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
