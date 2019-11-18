import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { QuizesComponent, QuizComponent } from './containers';
import { QuizSummaryComponent } from './components';
import { QRCodeModule } from 'angular2-qrcode';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiModule } from '../api';
import {
  WiredDivider,
  WiredListbox,
  WiredButton,
  WiredCard
} from 'wired-elements';

const wired = [WiredButton, WiredCard, WiredDivider, WiredListbox];
const containers = [QuizesComponent, QuizComponent];
const components = [QuizSummaryComponent];

@NgModule({
  imports: [CommonModule, ApiModule, RouterModule, QRCodeModule],
  declarations: [...containers, ...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ...wired],
  exports: [...containers]
})
export class ChartsModule {}
