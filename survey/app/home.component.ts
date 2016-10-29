import { Component } from '@angular/core';

import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject.service'
import {RequestOptions, Headers, Response, Http} from "@angular/http";
import {SurveyService} from "./services/survey.service";



@Component({
  selector: 'my-home',
  templateUrl : './app/templates/home_template.html',
  //styleUrls: ['../bootstrap.css']
    providers: [SubjectService, SurveyService]


})
export class HomeComponent {

    public subjectData: {};
    public mySubjects :string;



    public subjectService;
    constructor(private http:Http, private _dataService: SubjectService){

    }

    getSubjects() {
        this._dataService.GetAll()
            .subscribe(
                res => this.mySubjects= res, // put the data returned from the server in our variable
                error => console.log("Error HTTP GET Service"), // in case of failure show this message
                () => {console.log("Job Done Get !"), console.log(this.mySubjects)}//run this code in all cases
            );

    }




}

