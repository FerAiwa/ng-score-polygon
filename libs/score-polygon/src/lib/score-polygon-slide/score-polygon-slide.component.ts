import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import {
  ScorePolygonComponent,
  ScoreMarker
} from '../score-polygon/score-polygon.component';
import { ScorePolygon } from '../score-polygon';

export interface EventScore {
  event: string;
  score: ScoreMarker[];
  date: Date;
}
export const DEFAULTCONFIG = {
  // Base Config
  showText: false,
  showIcons: true,
  showPercentPolygons: true,
  showOuterCircle: true,
  scorePolygonColor: '#0e529e',
  comparePolygonColor: 'transparent', //es diferente aqui
  maxScorePolygonColor: '#dadada',
  innerLinesColor: 'green',
  iconCircleColor: 'lightgrey',
  outerCircleColor: 'lightgrey',
  compareScores: true,
  // Slide
  slideShow: true,
  slideSpeed: 1,
  startDelay: 3,
  showIncrementalArrows: true,
  showTimeLabel: true,
  showControls: false,
  showControlsIcon: true
};
//Dado un conjunto de puntuaciones, cambia Score y CompareScore a lo largo del tiempo

@Component({
  selector: 'ng-score-polygon-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: '../score-polygon/score-polygon.component.html',
  styleUrls: ['../score-polygon/score-polygon.component.scss']
})
export class ScorePolygonSlideComponent extends ScorePolygonComponent
  implements OnInit {
  @Input() eventScores: [];
  @Input() slideShow: boolean;
  @Input() slideSpeed: number;
  @Input() startDelay: number;

  @Input() showIncrementArrows: boolean;
  @Input() showTimeLabel: boolean;
  @Input() showControls: boolean;
  @Input() showControlsIcon: boolean;

  _eventScores;

  currentSlideIndex: number;
  comparisonSlideIndex: number;

  ngOnInit() {
    this.config = DEFAULTCONFIG;
  }

  pointsToPath(points) {
    return `M${points} Z`;
  }

  getPolygon(scores): string {
    if (!scores.length) return;

    const polygon = new ScorePolygon({
      width: 200,
      scores: scores.map(sc => sc.score)
    });
    const points = polygon.points
      .map(point => `${point.x},${point.y}`)
      .join(' ');

    return `M${points} Z`;
  }

  /*
  Ahora necesito una forma de que cada X frames (que corresponden cuando
    cambia el path al total de otras puntuaciones
    )
   */

  //Turn the polygon points into SVG path, that is morphable.
  get frameSequence(): string {
    if (!this.eventScores.length) return;

    const frames = this.eventScores
      .map(event => this.getPolygon(event.scores))
      .join(';');

    return frames;
  }

  get arrowsOpacity() {
    const arrowOpacity = this.eventScores
      .map(event => event.scores[0].score)
      .map((score, i, arr) => {
        if (arr[i + 1] < this.eventScores.length) {
          return arr[i + 1] > score ? 100 : 0;
        }
        return 100;
      });
    return arrowOpacity.join(';');
  }

  showPath() {
    const animation = this.polyscale.nativeElement;
    const currTime = animation.getCurrentTime();
    const loops = animation.getCurrentTime() / animation.getSimpleDuration();

    console.log('currentT', currTime, 'loops', loops);
    console.log(this.polyscale);

    this.polyscale.nativeElement.endElement();
  }
}
