import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePolygonComponent } from './score-polygon/score-polygon.component';
import { ScorePolygonSlideComponent } from './score-polygon-slide/score-polygon-slide.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ScorePolygonComponent, ScorePolygonSlideComponent],
  exports: [ScorePolygonComponent, ScorePolygonSlideComponent]
})
export class ScorePolygonModule {}
