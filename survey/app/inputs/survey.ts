import {Component,Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {QuestionModel} from './question-model';
import {TextboxQuestion} from './textbox-question';

@Component({
    selector:'survey',
    templateUrl:'./app/templates/survey_template.html',
    styleUrls:  ['../styles.css']
})

export class Survey implements OnInit{

    @Input() model : any;
    form : FormGroup;
    payLoad = null;

    ngOnInit(){
        this.form = this.model.toGroup();
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}