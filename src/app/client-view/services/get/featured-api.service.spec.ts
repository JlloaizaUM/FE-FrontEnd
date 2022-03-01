import { TestBed } from '@angular/core/testing';

import { FeaturedApiService } from './featured-api.service';

describe('FeaturedApiService', () => {
  let service: FeaturedApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
