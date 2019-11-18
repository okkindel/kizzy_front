import { Component, OnInit, Input } from '@angular/core';
import { isNil } from 'ramda';

@Component({
  selector: 'app-quiz-summary',
  templateUrl: './quiz-summary.component.html',
  styleUrls: ['./quiz-summary.component.scss']
})
export class QuizSummaryComponent implements OnInit {
  data: any = {};
  points = '0/0';

  @Input() set userData(value) {
    if (!isNil(value)) {
      this.data = value;
      this.points = `${value.answers.filter(v => v.is_correct).length}/${
        value.answers.length
      }`;
    }
  }

  constructor() {}

  ngOnInit() {}
}
