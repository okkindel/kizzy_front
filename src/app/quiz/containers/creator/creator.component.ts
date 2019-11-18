import { Component, ElementRef, ViewChild } from '@angular/core';
import { IQuestion, IQuiz } from '../../models';
import { QuizService } from '../../services';
import { WiredCard } from 'wired-elements';
import { delay } from 'rxjs/operators';
import { last } from 'ramda';
import { of } from 'rxjs';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent {
  @ViewChild('frame', { static: false }) frame: ElementRef;

  quiz: IQuiz = {
    name: null,
    questions: [],
    registration_fields: []
  };

  constructor(private serice: QuizService) {
    this.addNewQuestion();
    this.addNewQuestion();
    this.addNewQuestion();
  }

  create() {
    if (!JSON.stringify(this.quiz).includes('null')) {
      this.serice.goToSummary(this.quiz);
    }
  }

  addNewQuestion() {
    this.quiz.questions.push({
      answers: [{ id: 1, value: null, is_correct: true }],
      id: !(this.quiz.questions.length === 0)
        ? last(this.quiz.questions).id + 1
        : 1,
      question: null
    });

    // DIRTY HACK HERE BECUASE WIRED IS RETARTED
    of({})
      .pipe(delay(0))
      .subscribe(() => (this.frame.nativeElement as WiredCard).requestUpdate());
  }

  deleteQuestion(question: IQuestion) {
    this.quiz.questions = this.quiz.questions.filter(
      data => data.id !== question.id
    );
  }
}
