import { QuizService } from '../../services';
import { QuizApiService } from 'src/app/api';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isNil } from 'ramda';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  quizData: any;

  constructor(
    private service: QuizService,
    private api: QuizApiService,
    private router: Router
  ) {
    if (!isNil(this.service.quizData)) {
      this.quizData = this.service.quizData;
    } else {
      this.router.navigate(['home']);
    }
  }

  start() {
    this.api
      .startQuiz(this.quizData.id)
      .subscribe(_ => this.router.navigate(['quiz', this.quizData.id]));
  }

  goToSummary() {
    this.router.navigate(['quiz', this.quizData.id]);
  }
}
