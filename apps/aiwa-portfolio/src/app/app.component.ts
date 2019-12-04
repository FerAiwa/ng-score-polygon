import { Component, OnInit, ViewChild } from '@angular/core';
import { ScorePolygonComponent } from '@aiwa-lab/score-polygon';
import { SCORESMOCK } from '../assets/data/scores';

@Component({
  selector: 'aiwa-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ScorePolygonComponent, { static: false })
  polygonComponent: ScorePolygonComponent;
  scores;

  ngOnInit() {
    this.updateEdges(5);
  }

  updateEdges(quantity: number) {
    this.scores = [...SCORESMOCK].splice(0, quantity);
    this.randomizeScores();
  }

  randomizeScores() {
    this.scores = this.scores.map(score => ({
      ...score,
      score: (Math.random() * 10).toFixed(0)
    }));
  }

  updateColor(color: string) {
    this.updatePolygonComponent('scorePolygonColor', color);
  }

  updateBackgroundColor(color: string) {
    this.updatePolygonComponent('maxScorePolygonColor', color);
  }

  updateInnerLinesColor(color: string) {
    this.updatePolygonComponent('innerLinesColor', color);
  }

  updatePercentPolygonDisplay(checked: boolean) {
    this.updatePolygonComponent('showPercentPolygons', checked);
  }

  updateIconMarkersDisplay(checked: boolean) {
    this.updatePolygonComponent('showIcons', checked);
  }

  updateTextMarkerDisplay(checked: boolean) {
    this.updatePolygonComponent('showText', checked);
  }

  updatePolygonComponent(part: string, value: any) {
    this.polygonComponent[part] = value;
    this.polygonComponent.changeDetector.markForCheck();
  }

  updateOuterCircleDisplay(checked: boolean) {
    this.updatePolygonComponent('showOuterCircle', checked);
  }
}
