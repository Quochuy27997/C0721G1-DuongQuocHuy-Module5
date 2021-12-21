import { TestBed } from '@angular/core/testing';

import { DiaDiemDenService } from './dia-diem-den.service';

describe('DiaDiemDenService', () => {
  let service: DiaDiemDenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaDiemDenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
