import { Component } from '@angular/core';

import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Observable }     from 'rxjs/Observable';
import { Configuration } from './home.constants';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {SubjectService} from './services/subject-service'
import {RequestOptions, Headers, Response, Http} from "@angular/http";



@Component({
  selector: 'my-home',
  templateUrl : './app/templates/home_template.html',
  //styleUrls: ['../bootstrap.css']

})
export class HomeComponent {

    public subjectData: {};

    public subjectService;
    constructor(private http:Http){

    }




}

