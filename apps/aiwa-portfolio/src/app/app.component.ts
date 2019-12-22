import { Component, OnInit, ViewChild } from '@angular/core';
import { ScorePolygonComparerComponent } from '@aiwa-lab/score-polygon';
import { SCORESMOCK } from '../assets/data/scores';
import { ScorePolygonDataService } from '@aiwa-lab/score-polygon';

@Component({
  selector: 'aiwa-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(ScorePolygonComparerComponent, { static: false })
  scorecomparerComponent: ScorePolygonComparerComponent;
  edges = 5;
  scores;
  compareScores;
  scoreSlide;

  constructor(private scoreDataService: ScorePolygonDataService) {}

  ngOnInit() {
    this.updateEdges(this.edges);
  }

  updateEdges(quantity: number) {
    this.edges = quantity;
    const scores = [...SCORESMOCK].splice(0, quantity);
    this.scores = this.randomizeScores(scores);
    this.compareScores = this.randomizeScores(scores);

    const months = ['Enero', 'Febrero', 'Marzo', 'Mayo', 'Junio'];
    this.scoreDataService.setScores([
      { scores: this.randomizeScores(scores), profileName: months[0] },
      { scores: this.randomizeScores(scores), profileName: months[1] },
      { scores: this.randomizeScores(scores), profileName: months[2] }
    ]);
  }

  randomizeScores(scores) {
    return scores.map(score => ({
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

  updateOuterCircleDisplay(checked: boolean) {
    this.updatePolygonComponent('showOuterCircle', checked);
  }

  updatePolygonComponent(part: string, value: any) {
    this.scorecomparerComponent.polygonComponent[part] = value;
    this.scorecomparerComponent.polygonComponent.changeDetector.markForCheck();
  }
}
