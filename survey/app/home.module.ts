import {NgModule, CUSTOM_ELEMENTS_SCHEMA}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent }   from './home.component';
import { FormsModule }                  from '@angular/forms';
import { ReactiveFormsModule }          from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import {Survey} from "./survey";








@NgModule({
  imports:      [ BrowserModule , ReactiveFormsModule,  FormsModule, HttpModule ],
  declarations: [ HomeComponent, Survey ],
  bootstrap:    [ HomeComponent ]
//  exports:      [ Survey ]
})
export class HomeModule { }

