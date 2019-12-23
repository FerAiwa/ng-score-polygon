import {
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
  Input,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { combineLatest, BehaviorSubject, timer, merge } from 'rxjs';
import { skipWhile, takeUntil } from 'rxjs/operators';
import { ScoreSet } from '../interfaces';
import { ScorePolygonControlsComponent } from '../score-polygon-controls/score-polygon-controls.component';

@Component({
  selector: 'ng-score-polygon-comparer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-score-polygon
      [scores]="activeScores"
      [compareScores]="refScores"
      [config]="polygonConfig$ | async"
    >
    </ng-score-polygon>
    <ng-score-polygon-controls
      [text]="controlText"
      [loop]="loop"
      [play]="play"
    ></ng-score-polygon-controls>
  `,
  styleUrls: ['./score-polygon-comparer.component.scss']
})
export class ScorePolygonComparerComponent
  implements OnInit, AfterViewInit, OnDestroy {
  // USER SETUP ----------------------------------------------
  @Input() autoplay = true;
  @Input() loop = true;
  @Input() speed = 5.5;
  @Input() delay = 0;
  @Input() set scoreSets(value: any[]) {
    this.scores$.next(value);
  }
  @Input() set config(value) {
    this.polygonConfig$.next(value);
  }

  // ANIMATION CONTROL ---------------------------------------
  private scores$ = new BehaviorSubject<ScoreSet[]>([]);
  private currentIndex$ = new BehaviorSubject<number>(0);
  private indexLimitReached$ = new BehaviorSubject<boolean>(false);

  // Updates polygon whenever data or current index changes
  scoresSlider$ = combineLatest(this.scores$, this.currentIndex$)
    .pipe(skipWhile(([scores]) => !scores.length))
    .subscribe(([scores, i]) => {
      const previousIndex = i - 1;

      if (previousIndex === -1) this.compareScores(scores, i);
      else this.compareScores(scores, i, previousIndex);
    });

  // COMPONENTS SETUP ------------------------------------
  @ViewChild(ScorePolygonControlsComponent, { static: true })
  controlsComponent: ScorePolygonControlsComponent;
  public polygonConfig$ = new BehaviorSubject<any>(null);
  activeScores = null;
  refScores = null;
  controlText = '';
  play = true;

  startAnimation(speed = 1, delay = 2000, loop = true) {
    const scoreSize = this.scores$.getValue().length;
    const totalAnimationTime = speed * 1000 * scoreSize;

    const reachedLimitAndNoLoop$ = this.indexLimitReached$.pipe(
      skipWhile(limit => !limit || this.loop)
    );
    const controls = this.controlsComponent;
    const stopConditions$ = merge(
      reachedLimitAndNoLoop$,
      controls.next,
      controls.previous,
      controls.toggleAnimation.pipe(skipWhile(() => this.play))
    );
    timer(delay, totalAnimationTime)
      .pipe(takeUntil(stopConditions$))
      .subscribe(
        () => this.onNextScore(),
        () => {},
        () => this.stopAnimation()
      );
  }

  stopAnimation() {
    this.play = false;
  }

  restartFrames() {
    this.currentIndex$.next(0);
    this.indexLimitReached$.next(false);
  }

  setControlListeners() {
    const controls = this.controlsComponent;
    controls.next.subscribe(() => this.onNextScore());
    controls.previous.subscribe(() => this.onPreviousScore());
    controls.loopAnimation.subscribe((flag: boolean) => (this.loop = flag));

    controls.toggleAnimation.subscribe(() => {
      this.play = !this.play;
      if (!this.play) {
        return this.stopAnimation();
      }

      const i = this.currentIndex$.getValue();
      const isLastIndex = this.scores$.getValue().length - 1 === i;
      if (isLastIndex) this.restartFrames();

      return this.startAnimation(this.speed, this.delay, this.loop);
    });
  }

  onNextScore() {
    let i = this.currentIndex$.getValue();
    const hasMoreScores = this.scores$.getValue().length > i + 1;

    return hasMoreScores
      ? this.currentIndex$.next(++i)
      : this.loop === true
      ? this.currentIndex$.next(0)
      : this.indexLimitReached$.next(true);
  }

  onPreviousScore() {
    const activeIndex = this.currentIndex$.getValue();
    if (activeIndex > 0) this.currentIndex$.next(activeIndex - 1);
  }

  compareScores(scores, i: number, j?: number) {
    this.activeScores = scores[i].scores;
    this.refScores = j !== undefined ? scores[j].scores : [];

    this.controlText = scores[i].setName;
    this.cdr.markForCheck();
  }

  ngOnInit() {
    this.setControlListeners();
  }

  ngAfterViewInit() {
    if (this.autoplay) this.startAnimation();
  }

  ngOnDestroy() {
    this.scoresSlider$.unsubscribe();
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
