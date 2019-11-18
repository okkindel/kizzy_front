import { HttpClient } from '@angular/common/http';
import { IQuiz } from 'src/app/quiz/models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  forUserReport,
  reportMany,
  forFinish,
  forStart,
  quizMany,
  quizOne
} from '../routes';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {
  constructor(private http: HttpClient) {}

  addQuiz(quiz: IQuiz): Observable<any> {
    return this.http.post(quizMany, quiz);
  }

  startQuiz(quizId: string): Observable<any> {
    return this.http.put(forStart(quizId), {});
  }

  finishQuiz(quizId: string): Observable<any> {
    return this.http.put(forFinish(quizId), {});
  }

  deleteQuiz(quizId: string): Observable<any> {
    return this.http.delete(quizOne(quizId), {});
  }

  getQuizes(): Observable<any> {
    return this.http.get(quizMany);
  }

  getQuiz(id: string): Observable<any> {
    return this.http.get(quizOne(id));
  }

  getQuizDetails(id: string): Observable<any> {
    return this.http.get(reportMany(id));
  }

  getQuizForUser(quizId: string, userId: string): Observable<any> {
    return this.http.get(forUserReport(quizId, userId));
  }
}
