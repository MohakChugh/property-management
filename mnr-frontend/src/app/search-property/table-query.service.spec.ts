import { TestBed } from '@angular/core/testing';

import { TableQueryService } from './table-query.service';

describe('TableQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableQueryService = TestBed.get(TableQueryService);
    expect(service).toBeTruthy();
  });
});
