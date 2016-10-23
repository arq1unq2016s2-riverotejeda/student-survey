/**
 * Created by mar on 22/10/16.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Configuration} from '../home.constants'



@Injectable()
export class SubjectService {

    public subjectData : {};
    constructor(private http:Http) { }

    getSubjects() {
         this.http.get(`${Configuration.API_ENDPOINT}/subjects`)
            .subscribe(result => this.subjectData = result.json());
        return this.subjectData;
    }

}
