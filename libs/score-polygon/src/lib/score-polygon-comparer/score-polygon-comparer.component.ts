import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { ScorePolygonDataService } from '../score-polygon-data.service';
import { combineLatest, BehaviorSubject } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { ScorePolygonControlsComponent } from '../score-polygon-controls/score-polygon-controls.component';

@Component({
  selector: 'ng-score-polygon-comparer',
  template: `
    <ng-score-polygon [scores]="baseScores" [compareScores]="compareScores">
    </ng-score-polygon>
    <ng-score-polygon-controls
      [text]="compareScores?.eventLabel || 'Couldn´t load label'"
    ></ng-score-polygon-controls>
  `,
  styleUrls: ['./score-polygon-comparer.component.css']
})
export class ScorePolygonComparerComponent implements OnInit, OnDestroy {
  @ViewChild(ScorePolygonControlsComponent, { static: true })
  controlComponent: ScorePolygonControlsComponent;
  baseScores = null;
  compareScores = null;
  index$ = new BehaviorSubject<number>(0);

  scores$ = combineLatest(this.scoreDataService.scores$, this.index$)
    .pipe(skipWhile(([scores]) => !scores.length))
    .subscribe(([scores, index]) => {
      this.baseScores = scores[index];
      this.compareScores = scores[index - 1] || [];
    });

  ngOnInit() {
    this.controlComponent.next.subscribe(() => {
      const activeIndex = this.index$.getValue();
      const hasMoreScores =
        this.scoreDataService.getScores().length > activeIndex + 1;

      if (hasMoreScores) this.index$.next(activeIndex + 1);
    });

    this.controlComponent.previous.subscribe(() => {
      const activeIndex = this.index$.getValue();
      if (activeIndex > 0) this.index$.next(activeIndex - 1);
    });
  }

  constructor(public scoreDataService: ScorePolygonDataService) {}

  ngOnDestroy() {
    this.scores$.unsubscribe();
  }
}
