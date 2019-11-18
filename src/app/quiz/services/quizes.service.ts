import { QuizApiService } from 'src/app/api';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { IQuiz } from '../models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizData = null;
  quiz: IQuiz;

  constructor(private router: Router, private quizService: QuizApiService) {}

  goToSummary(quiz: IQuiz) {
    this.quiz = quiz;
    this.quizService
      .addQuiz(quiz)
      .pipe(tap(quizData => (this.quizData = quizData)))
      .subscribe(_ => this.router.navigate(['summary']));
  }
}
