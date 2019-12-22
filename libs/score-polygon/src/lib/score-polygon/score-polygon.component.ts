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
import { DEFAULTCONFIG } from './default.config';

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
export class ScorePolygonComponent implements OnChanges {
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
    This is an alternative to set params via template using property binding.
    If a param is not provided it will use the default config value.
  */
  @Input() set config(userConfig) {
    console.log('called config', userConfig);
    const configKeys = Object.keys(DEFAULTCONFIG);
    for (const k of configKeys) {
      this[k] =
        userConfig && userConfig[k] !== undefined
          ? userConfig[k]
          : DEFAULTCONFIG[k];
    }
    this.changeDetector.markForCheck();
  }

  constructor(public changeDetector: ChangeDetectorRef) {
    this.config = { ...DEFAULTCONFIG };
  }

  ngOnChanges() {
    if (!this.scores) return;
    const rawScores = this.scores.map(sc => sc.score);
    const wrapperPolygon = new ScorePolygon({
      width: 200,
      scores: rawScores.map(sc => 10)
    });
    this.vortexPoints = wrapperPolygon.points; //used as placeholder for the score icons
    this.wrapperPolygon = scoresToSVGPolygon(rawScores.map(sc => 10), 200);

    this.polyscale.nativeElement.beginElement();
  }

  get frameSequence(): string {
    const frame1 = this.getPolygonFromScores();
    const frame2 = this.getComparePolygon();
    const frameSequence = ` M${frame2} Z; M${frame1} Z;`;

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
