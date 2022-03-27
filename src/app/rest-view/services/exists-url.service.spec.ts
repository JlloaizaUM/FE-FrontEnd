import { TestBed } from '@angular/core/testing';

import { ExistsURLService } from './exists-url.service';

describe('ExistsURLService', () => {
  let service: ExistsURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistsURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
