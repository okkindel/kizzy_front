import { Component, OnInit } from '@angular/core';
import { QuizApiService } from 'src/app/api';
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit {
  quizes: any[];

  constructor(private service: QuizApiService, private router: Router) {}

  ngOnInit() {
    this.service
      .getQuizes()
      .pipe(pluck('quizzes'))
      .subscribe(ans => {
        this.quizes = ans;
      });
  }

  goToQuiz(id: string) {
    this.router.navigate(['quiz', id]);
  }
}
