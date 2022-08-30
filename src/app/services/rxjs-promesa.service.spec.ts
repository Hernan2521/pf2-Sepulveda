import { TestBed } from '@angular/core/testing';

import { RxjsPromesaService } from './rxjs-promesa.service';

describe('RxjsPromesaService', () => {
  let service: RxjsPromesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsPromesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
