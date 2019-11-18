import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WiredButton, WiredCard } from 'wired-elements';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers';

const wired = [WiredButton, WiredCard];
const components = [HomeComponent];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ...wired],
  declarations: [...components],
  exports: [HomeComponent],
  imports: [CommonModule]
})
export class HomeModule {}
