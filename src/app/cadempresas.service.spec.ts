import { TestBed } from '@angular/core/testing';

import { CadempresasService } from './cadempresas.service';

describe('CadempresasService', () => {
  let service: CadempresasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadempresasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
