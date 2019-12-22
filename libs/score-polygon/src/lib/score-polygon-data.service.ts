import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScorePolygonDataService {
  private config = new BehaviorSubject<any>(null);
  public config$ = this.config.asObservable();
  private scores = new BehaviorSubject<any>([]);
  public scores$ = this.scores.asObservable();

  setConfig(config) {
    this.config.next(config);
  }

  getScores() {
    return this.scores.getValue();
  }

  setScores(scores) {
    this.scores.next([...scores]);
  }

  addScore(score) {
    this.scores.next([...this.getScores(), score]);
  }
}
