import { CreatorComponent, SummaryComponent } from './containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QRCodeModule } from 'angular2-qrcode';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './components';
import { ApiModule } from 'src/app/api';
import {
  WiredIconButton,
  WiredDivider,
  WiredButton,
  WiredInput,
  WiredCard,
  WiredCombo
} from 'wired-elements';

const containers = [CreatorComponent, SummaryComponent];
const components = [AnswerComponent];

const wired = [
  WiredIconButton,
  WiredDivider,
  WiredButton,
  WiredCombo,
  WiredInput,
  WiredCard
];
@NgModule({
  imports: [
    ReactiveFormsModule,
    QRCodeModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ApiModule
  ],
  declarations: [...containers, ...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ...wired],
  exports: [containers]
})
export class QuizModule {}
