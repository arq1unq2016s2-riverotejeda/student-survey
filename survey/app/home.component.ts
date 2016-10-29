import { Component } from '@angular/core';

import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject-service'
import {RequestOptions, Headers, Response, Http} from "@angular/http";
import {SurveyService} from "./services/survey.service";
import {Survey} from "./survey";



@Component({
  selector: 'my-home',
  templateUrl : './app/templates/home_template.html',
  //styleUrls: ['../bootstrap.css']

})
export class HomeComponent {

    errorMessage: string;
    survey: Survey[];
    mode = 'Observable';

    constructor (private surveyService: SurveyService) {}

    ngOnInit() { this.getSurvey; }

    getSurvey() {
        this.surveyService.getSurvey()
            .subscribe(
                survey => this.survey = survey,
                error =>  this.errorMessage = <any>error);
    }
}

