import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ng-score-polygon-controls',
  templateUrl: './score-polygon-controls.component.html',
  styleUrls: ['./score-polygon-controls.component.css']
})
export class ScorePolygonControlsComponent {
  @Input() text: string;
  @Input() reachedMax = false;
  @Input() reachedMin = true;
  @Input() useDefaultButtons = true;
  @Output() next = new EventEmitter<string>();
  @Output() previous = new EventEmitter<string>();
}
