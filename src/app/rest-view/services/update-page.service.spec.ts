import { TestBed } from '@angular/core/testing';

import { UpdatePageService } from './update-page.service';

describe('UpdatePageService', () => {
  let service: UpdatePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
