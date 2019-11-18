import { CreatorComponent, SummaryComponent } from './quiz/containers';
import { LoginComponent, RegisterComponent } from './auth/containers';
import { QuizesComponent, QuizComponent } from './charts/containers';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/containers';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'quizes',
    component: QuizesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'quiz/:id',
    component: QuizComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      enableTracing: false
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
