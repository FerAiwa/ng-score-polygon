import { async, TestBed } from '@angular/core/testing';
import { ScorePolygonModule } from './score-polygon.module';

describe('ScorePolygonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ScorePolygonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScorePolygonModule).toBeDefined();
  });
});
