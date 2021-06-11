import { TestBed, waitForAsync } from '@angular/core/testing';
import { ScorePolygonModule } from './score-polygon.module';

describe('ScorePolygonModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ScorePolygonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ScorePolygonModule).toBeDefined();
  });
});
