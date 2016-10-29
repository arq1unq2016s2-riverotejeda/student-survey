/**
 * Created by mar on 29/10/16.
 */

/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Configuration} from '../home.constants'
import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';


import 'rxjs/add/operator/map'



@Injectable()
export class SurveyService {

    public subjectData;

    constructor(private _http:Http) {


    }

    public GetAll = (): Observable<any> => {
        return this._http.get(`${Configuration.API_ENDPOINT}/survey`).map((response: Response) => <any>response.json());
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
