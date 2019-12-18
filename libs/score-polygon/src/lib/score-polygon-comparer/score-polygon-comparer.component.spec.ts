import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePolygonComparerComponent } from './score-polygon-comparer.component';

describe('ScorePolygonComparerComponent', () => {
  let component: ScorePolygonComparerComponent;
  let fixture: ComponentFixture<ScorePolygonComparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorePolygonComparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePolygonComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
