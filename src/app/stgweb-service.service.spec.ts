import { TestBed } from '@angular/core/testing';

import { STGWebServiceService } from './stgweb-service.service';

describe('STGWebServiceService', () => {
  let service: STGWebServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STGWebServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
