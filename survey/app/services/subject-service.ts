/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Configuration} from '../home.constants'
import {Component} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';




@Injectable()
export class SubjectService {

    public subjectData;
    constructor(private http:Http) {

        this.getSubjects();
        console.log(this.subjectData);
    }

    getSubjects() {
        /*this.http.get(`${Configuration.API_ENDPOINT}/subjects`)
            .subscribe(result =>
             //   console.log(result.json()));


                this.subjectData = result.json());*/
        //return this.subjectData;


         return this.http.get(`${Configuration.API_ENDPOINT}/subjects`)
            .map((res: Response) => res.json())
            .subscribe(res => {this.subjectData = res});


        //return this.subjectData;

        /*return this.http.get(`${Configuration.API_ENDPOINT}/subjects`)
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));*/

    }

}
