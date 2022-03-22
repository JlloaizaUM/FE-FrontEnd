import { TestBed } from '@angular/core/testing';

import { GetRestDataService } from './get-rest-data.service';

describe('GetRestDataService', () => {
  let service: GetRestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
