import { TestBed } from '@angular/core/testing';

import { IpoAPIService } from './ipo-api.service';

describe('IpoAPIService', () => {
  let service: IpoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
