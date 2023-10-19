import { TestBed } from '@angular/core/testing';

import { jwtSecurityService } from './jwt-security.service';

describe('jwtSecurityService', () => {
  let service: jwtSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(jwtSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
