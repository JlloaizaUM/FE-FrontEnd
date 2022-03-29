import { TestBed } from '@angular/core/testing';

import { UploadDishService } from './upload-dish.service';

describe('UploadDishService', () => {
  let service: UploadDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
