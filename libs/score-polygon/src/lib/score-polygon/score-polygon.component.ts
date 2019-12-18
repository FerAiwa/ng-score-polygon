import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  OnInit
} from '@angular/core';
import { ScorePolygon } from '../score-polygon';
import { scoresToSVGPolygon, polygonToSVGPath } from '../SVG-mappers';

export interface ScoreMarker {
  label: string;
  score: number;
  maxScore?: 10;
  markerImage?: string;
}

@Component({
  selector: 'ng-score-polygon',
  templateUrl: './score-polygon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./score-polygon.component.scss']
})
export class ScorePolygonComponent implements OnInit, OnChanges {
  private DEFAULTCONFIG = {
    showText: false,
    showIcons: true,
    compareScores: true,
    showPercentPolygons: true,
    showOuterCircle: true,
    scorePolygonColor: '#0e529e',
    comparePolygonColor: 'transparent', //'#2f233e',
    maxScorePolygonColor: '#dadada',
    innerLinesColor: 'green',
    iconCircleColor: 'lightgrey',
    outerCircleColor: 'lightgrey'
  };

  @ViewChild('polyscale', { static: true }) polyscale: ElementRef;
  @Input() scores: ScoreMarker[];
  @Input() compareScores: ScoreMarker[];
  @Input() showText;
  @Input() showIcons;
  @Input() showPercentPolygons;
  @Input() showOuterCircle;

  @Input() scorePolygonColor;
  @Input() comparePolygonColor;
  @Input() maxScorePolygonColor;
  @Input() innerLinesColor;
  @Input() iconCircleColor;
  @Input() outerCircleColor;

  public vortexPoints;
  public wrapperPolygon: string;
  activeScore: ScoreMarker;

  /**
    Sets all the configuration params in one step and calls the changeDetector.
    This is an alternative to set params via template using the [ property binding ] syntax.

    If a param is not provided it will use the value specified in the default config.
  */
  set config(userConfig) {
    const configKeys = Object.keys(this.DEFAULTCONFIG);
    for (const k of configKeys) {
      this[k] =
        userConfig[k] !== undefined ? userConfig[k] : this.DEFAULTCONFIG[k];
    }
    console.log('config updated');

    this.changeDetector.markForCheck();
  }

  constructor(public changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.config = this.DEFAULTCONFIG;
  }

  ngOnChanges() {
    if (!this.scores) return;
    const rawScores = this.scores.map(sc => sc.score);
    const wrapperPolygon = new ScorePolygon({
      width: 200,
      scores: rawScores.map(sc => 10)
    });
    this.vortexPoints = wrapperPolygon.points;
    this.wrapperPolygon = scoresToSVGPolygon(rawScores.map(sc => 10), 200);

    this.polyscale.nativeElement.beginElement();
  }

  get frameSequence(): string {
    const frame1 = this.getPolygonFromScores();
    const frame2 = this.getComparePolygon();
    const frameSequence = `M${frame1} Z; M${frame2} Z;`;

    return frameSequence;
  }

  getPolygon(scores): string {
    if (!scores.length) return;
    const polygon = new ScorePolygon({
      width: 200,
      scores: scores.map(sc => sc.score)
    });
    return polygonToSVGPath(polygon.points);
  }

  getComparePolygon() {
    return this.getPolygon(this.compareScores);
  }

  getPolygonFromScores(): string {
    return this.getPolygon(this.scores);
  }

  showScoreTooltip(i) {
    this.activeScore = this.scores[i];
  }

  getScaledPolygon(i): string {
    return `scale(${i / 10})`;
  }

  getLine(i, point): string {
    return `0,0 ${point.x},${point.y}`;
  }

  getMarkerPattern(i): string {
    return `url(#pattern-${i})`;
  }
}
