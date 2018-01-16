import { TestBed, inject } from '@angular/core/testing';

import { NbaService } from './nba-service.service';

describe('NbaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NbaService]
    });
  });

  it('should be created', inject([NbaService], (service: NbaService) => {
    expect(service).toBeTruthy();
  }));
});
