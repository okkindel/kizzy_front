import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizApiService } from 'src/app/api';
import { combineLatest, of } from 'rxjs';
import { isNil } from 'ramda';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  selectedUser = null;
  report: any = {};
  quiz: any = {};
  id: string;

  constructor(
    private service: QuizApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  userReport$ = of(null);

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
  }

  getData() {
    combineLatest([
      this.service.getQuiz(this.id),
      this.service.getQuizDetails(this.id)
    ]).subscribe(([quiz, report]) => {
      this.quiz = quiz;
      this.report = report;
    });
  }

  startQuiz() {
    this.service.startQuiz(this.id).subscribe(_ => this.getData());
  }

  finishQuiz() {
    this.service.finishQuiz(this.id).subscribe(_ => this.getData());
  }

  deleteQuiz() {
    this.service
      .deleteQuiz(this.id)
      .subscribe(_ => this.router.navigate(['quizes']));
  }

  selectUser(id: string) {
    if (!isNil(id) && typeof id === 'string') {
      this.userReport$ = this.service.getQuizForUser(this.id, id);
      this.selectedUser = id;
    } else {
      this.selectedUser = null;
    }
  }
}
