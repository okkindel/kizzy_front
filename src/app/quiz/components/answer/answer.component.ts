import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IQuestion } from '../../models';
import { last } from 'ramda';

const DEFAULT_QUESTION = {
  id: null,
  value: null,
  is_correct: false
};

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent {
  private _question: IQuestion;

  @Output() wasDeleted = new EventEmitter<boolean>();

  @Input() set question(value: IQuestion) {
    this._question = value;
  }

  get question(): IQuestion {
    return this._question;
  }

  deleteAnswer(id: number) {
    this.question.answers = this.question.answers.filter(ans => ans.id !== id);
    if (this.question.answers.length === 0) {
      this.wasDeleted.emit(true);
    }
  }

  selectedOption(id: string) {
    this.question.answers.map(ans => {
      ans.is_correct = ans.id.toString() === id;
    });
  }

  addNewAnswer() {
    this.question.answers.push({
      ...DEFAULT_QUESTION,
      id: last(this.question.answers).id + 1
    });
  }
}
