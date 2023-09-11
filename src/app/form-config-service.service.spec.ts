import { TestBed } from '@angular/core/testing';

import { FormConfigServiceService } from './form-config-service.service';

describe('FormConfigServiceService', () => {
  let service: FormConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
