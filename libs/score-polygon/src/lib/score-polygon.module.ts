import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScorePolygonComponent } from './score-polygon/score-polygon.component';
import { ScorePolygonControlsComponent } from './score-polygon-controls/score-polygon-controls.component';
import { ScorePolygonComparerComponent } from './score-polygon-comparer/score-polygon-comparer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ScorePolygonComponent,
    ScorePolygonControlsComponent,
    ScorePolygonComparerComponent
  ],
  exports: [ScorePolygonComponent, ScorePolygonComparerComponent]
})
export class ScorePolygonModule {}
