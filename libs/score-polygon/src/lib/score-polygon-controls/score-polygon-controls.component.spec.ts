import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePolygonControlsComponent } from './score-polygon-controls.component';

describe('ScorePolygonControlsComponent', () => {
  let component: ScorePolygonControlsComponent;
  let fixture: ComponentFixture<ScorePolygonControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorePolygonControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePolygonControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
