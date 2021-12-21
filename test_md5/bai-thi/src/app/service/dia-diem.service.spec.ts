import { TestBed } from '@angular/core/testing';

import { DiaDiemService } from './dia-diem.service';

describe('DiaDiemService', () => {
  let service: DiaDiemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaDiemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
