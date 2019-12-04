import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  ChangeDetectorRef,
  ViewChild,
  ElementRef
} from '@angular/core';
import { ScorePolygon } from '../score-polygon';
import { scoresToSVGPolygon, polygonToSVGPath } from '../SVG-mappers';

interface ScoreMarker {
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
  @Input() maxScore = 10;
  @Input() showText = false;
  @Input() showIcons = true;
  @Input() showPercentPolygons = true;
  @Input() showOuterCircle = true;

  @Input() scorePolygonColor = '#0e529e';
  @Input() maxScorePolygonColor = '#dadada';
  @Input() innerLinesColor = 'green';
  @Input() iconCircleColor = 'lightgrey';
  @Input() outerCircleColor = 'lightgrey';
  public pointList;
  public points: string;
  public vortex: string;

  activeScore: ScoreMarker;

  constructor(public changeDetector: ChangeDetectorRef) {}

  ngOnChanges() {
    const rawScores = this.scores.map(sc => sc.score);
    const polygon = new ScorePolygon({
      width: 200,
      scores: rawScores
    });

    const wrapperPolygon = new ScorePolygon({
      width: 200,
      scores: rawScores.map(sc => 10)
    });

    this.pointList = wrapperPolygon.points;
    this.points = polygonToSVGPath(polygon.points);
    this.vortex = scoresToSVGPolygon(rawScores.map(sc => 10), 200);

    this.polyscale.nativeElement.beginElement();
  }

  showScoreTooltip(i) {
    this.activeScore = this.scores[i];
  }

  getScaledPolygon(i) {
    return `scale(${i / 10})`;
  }

  getLine(i, point) {
    return `0,0 ${point.x},${point.y}`;
  }

  getMarkerPattern(i) {
    return `url(#pattern-${i})`;
  }
}
