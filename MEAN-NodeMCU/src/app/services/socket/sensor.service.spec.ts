import { inject, TestBed } from '@angular/core/testing';

import { SensorService } from './socket.service';

describe('SensorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorService],
    });
  });

  it('should be created', inject([SensorService], (service: SensorService) => {
    expect(service).toBeTruthy();
  }));
});
