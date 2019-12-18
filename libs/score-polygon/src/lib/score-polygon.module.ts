import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePolygonComponent } from './score-polygon/score-polygon.component';
import { ScorePolygonSlideComponent } from './score-polygon-slide/score-polygon-slide.component';
import { ScorePolygonControlsComponent } from './score-polygon-controls/score-polygon-controls.component';
import { ScorePolygonComparerComponent } from './score-polygon-comparer/score-polygon-comparer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ScorePolygonComponent,
    ScorePolygonSlideComponent,
    ScorePolygonControlsComponent,
    ScorePolygonComparerComponent
  ],
  exports: [
    ScorePolygonComponent,
    ScorePolygonComparerComponent,
    ScorePolygonSlideComponent
  ]
})
export class ScorePolygonModule {}
