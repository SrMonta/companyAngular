import { TestBed } from '@angular/core/testing';

import { CompanyTestService } from './company-test.service';

describe('CompanyTestService', () => {
  let service: CompanyTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
