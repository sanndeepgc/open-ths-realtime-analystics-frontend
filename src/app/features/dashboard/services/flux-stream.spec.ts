import { TestBed } from '@angular/core/testing';
import { FluxStream } from './flux-stream';

describe('FluxStream', () => {
  let service: FluxStream;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FluxStream);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
