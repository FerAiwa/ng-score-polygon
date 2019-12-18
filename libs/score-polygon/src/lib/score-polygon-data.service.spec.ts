import { TestBed } from '@angular/core/testing';

import { ScorePolygonDataService } from './score-polygon-data.service';

describe('ScorePolygonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScorePolygonDataService = TestBed.get(ScorePolygonDataService);
    expect(service).toBeTruthy();
  });
});
