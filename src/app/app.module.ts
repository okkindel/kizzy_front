import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from './charts';
import { AuthModule } from './auth';
import { HomeModule } from './home';
import { QuizModule } from './quiz';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ChartsModule,
    AuthModule,
    HomeModule,
    QuizModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
