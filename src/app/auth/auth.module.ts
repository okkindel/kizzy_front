import { WiredButton, WiredInput, WiredCard } from 'wired-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent, RegisterComponent } from './containers';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ApiModule } from '../api';

const components = [LoginComponent, RegisterComponent];
const wired = [WiredButton, WiredInput, WiredCard];

@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ApiModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ...wired],
  declarations: [components],
  exports: [components]
})
export class AuthModule {}
