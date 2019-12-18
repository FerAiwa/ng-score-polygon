import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorePolygonDataService {
  private scores = new BehaviorSubject<any>([]);
  public scores$ = this.scores.asObservable();
  currentIndex$ = new BehaviorSubject<number>(0);

  getScores() {
    return this.scores.getValue();
  }

  setScores(scores) {
    this.scores.next([...scores]);
  }

  addScore(score) {
    this.scores.next([...this.getScores(), score]);
  }

  showNextScore() {}

  showPreviousScore() {}
}
