import { TestBed, inject } from '@angular/core/testing';

import { CommunicationserviceService } from './communicationservice.service';

describe('CommunicationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunicationserviceService]
    });
  });

  it('should be created', inject([CommunicationserviceService], (service: CommunicationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
