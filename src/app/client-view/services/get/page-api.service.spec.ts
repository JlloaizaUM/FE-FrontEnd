import { TestBed } from '@angular/core/testing';

import { PageAPIService } from './page-api.service';

describe('PageAPIService', () => {
  let service: PageAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
