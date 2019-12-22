import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ng-score-polygon-controls',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './score-polygon-controls.component.html',
  styleUrls: ['./score-polygon-controls.component.scss']
})
export class ScorePolygonControlsComponent {
  @ViewChild('playBtn', { static: true }) playBtn;
  @Input() set play(v) {
    const playBtn = this.playBtn.nativeElement;
    playBtn.classList.toggle('ion-md-play');
    playBtn.classList.toggle('ion-md-pause');
    playBtn.classList.toggle('active');
  }

  @Input() text: string;
  @Input() loop = false;
  @Output() loopAnimation = new EventEmitter();
  @Output() toggleAnimation = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() previous = new EventEmitter();

  toggleLoop({ target }) {
    this.loopAnimation.next(!this.loop);
  }
}
