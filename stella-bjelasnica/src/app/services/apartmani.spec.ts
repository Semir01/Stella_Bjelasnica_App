import { TestBed } from '@angular/core/testing';

import { Apartmani } from './apartmani';

describe('Apartmani', () => {
  let service: Apartmani;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apartmani);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
