import { TestBed } from '@angular/core/testing';

import { ServiciosTechService } from './servicios-tech-service';

describe('SeviciosTechService', () => {
  let service: ServiciosTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});