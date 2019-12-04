import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePolygonComponent } from './score-polygon/score-polygon.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ScorePolygonComponent],
  exports: [ScorePolygonComponent]
})
export class ScorePolygonModule {}
