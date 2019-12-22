import {
  Component,
  OnDestroy,
  ViewChild,
  OnInit,
  Input,
  AfterViewInit
} from '@angular/core';
import { combineLatest, BehaviorSubject, timer, merge } from 'rxjs';
import { skipWhile, takeUntil } from 'rxjs/operators';
import { ScorePolygonDataService } from '../score-polygon-data.service';
import { ScorePolygonControlsComponent } from '../score-polygon-controls/score-polygon-controls.component';
import { ScorePolygonComponent } from '../score-polygon/score-polygon.component';

@Component({
  selector: 'ng-score-polygon-comparer',
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
  @Input() set config(value) {
    this.scoreDataService.setConfig(value);
  }
  @Input() autoplay = true;
  @Input() loop = true;
  @Input() speed = 1;
  @Input() delay = 2000;

  // ANIMATION CONTROL ---------------------------------------
  currentIndex$ = new BehaviorSubject<number>(0);
  indexLimitAnouncer$ = new BehaviorSubject<boolean>(false);

  // Updates polygon whenever data or current index changes
  scoresSlider$ = combineLatest(
    this.scoreDataService.scores$,
    this.currentIndex$
  )
    .pipe(skipWhile(([scores]) => !scores.length))
    .subscribe(([scores, i]) => {
      const previousIndex = i - 1;

      if (previousIndex === -1) this.compareScores(scores, i);
      else this.compareScores(scores, i, previousIndex);
    });

  // CHILD COMPONENTS SETUP ------------------------------------
  @ViewChild(ScorePolygonComponent, { static: true })
  polygonComponent: ScorePolygonComponent;
  @ViewChild(ScorePolygonControlsComponent, { static: true })
  controlsComponent: ScorePolygonControlsComponent;

  polygonConfig$ = this.scoreDataService.config$.pipe(
    skipWhile(config => !config)
  );
  activeScores = null;
  refScores = null;
  controlText = '';
  play = true;

  startAnimation(speed = 1, delay = 2000, loop = true) {
    const scoreSize = this.scoreDataService.getScores().length;
    const totalAnimationTime = speed * scoreSize * 1000;
    const controls = this.controlsComponent;
    const onReachLimitAndNoLoop$ = this.indexLimitAnouncer$.pipe(
      skipWhile(limit => !limit || this.loop)
    );
    const stopConditions$ = merge(
      onReachLimitAndNoLoop$,
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
    this.indexLimitAnouncer$.next(false);
  }

  ngOnInit() {
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
      const isLastIndex = this.scoreDataService.getScores().length - 1 <= i;

      if (isLastIndex) this.restartFrames();
      return this.startAnimation(this.speed, this.delay, this.loop);
    });
  }

  ngAfterViewInit() {
    if (this.autoplay) this.startAnimation();
  }

  onNextScore() {
    let i = this.currentIndex$.getValue();
    const hasMoreScores = this.scoreDataService.getScores().length > i + 1;

    return hasMoreScores
      ? this.currentIndex$.next(++i)
      : this.loop === true
      ? this.currentIndex$.next(0)
      : this.indexLimitAnouncer$.next(true);
  }

  onPreviousScore() {
    const activeIndex = this.currentIndex$.getValue();
    if (activeIndex > 0) this.currentIndex$.next(activeIndex - 1);
  }

  compareScores(scores, i: number, j?: number) {
    this.activeScores = scores[i].scores;
    this.refScores = j !== undefined ? scores[j].scores : [];

    this.controlText = scores[i].profileName;
  }

  constructor(private scoreDataService: ScorePolygonDataService) {}

  ngOnDestroy() {
    this.scoresSlider$.unsubscribe();
  }
}
