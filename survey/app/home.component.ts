import { Component } from '@angular/core';
import {Survey} from './inputs/survey';
import {QuestionModel} from './inputs/question-model';
import {TextboxQuestion} from './inputs/textbox-question';
import {DropDownQuestion} from './inputs/dropdown-question';
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
    questionModel = new QuestionModel();
    public dataStore: {};

    public subjectService;
    constructor(private http:Http){
        this.subjectService = new SubjectService(http);

        let question = new TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Apellido';
        question.required = true;
        question.order = 1;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'firstName';
        question.text = 'Nombre';
        question.required = true;
        question.order = 2;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'legajo';
        question.text = 'Legajo';
        question.required = true;
        question.order = 3;
        this.questionModel.questions.push(question);


        question = new TextboxQuestion();
        question.key = 'emailAddress';
        question.text = 'Email';
        question.required = false;
        question.type = 'email';
        question.order = 4;
        this.questionModel.questions.push(question);

        var materias = [
            {
                "subject_name": "Sistemas distribuidos",
                "date": [
                    "C1: Jueves de 17 a 21"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Matematica 1",
                "date": [
                    "C1: Lunes de 8 a 12, Jueves de 8 a 11",
                    "C2: Lunes de 18 a 22, Jueves de 18 a 21"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Matematica 2",
                "date": [
                    "C1: Lunes de 18 a 22, Jueves de 18 a 22"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Arquitectura 1",
                "date": [
                    "C1: Lunes de 18 a 22"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Logica y programación",
                "date": [
                    "C1: Martes de 18 a 22"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Teoria de la computación",
                "date": [
                    "C1: Jueves de 18 a 22"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Lenguajes formales y automatas",
                "date": [
                    "C1: Viernes de 18 a 22"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            },
            {
                "subject_name": "Probabilidad y estadistica",
                "date": [
                    "C1: Miercoles de 18 a 21, Viernes de 18 a 21",
                    "C2: Miercoles de 9 a 12, Viernes de 9 a 12",
                    "C3: Lunes de 14 a 17, Jueves de 16 a 19"
                    ],
                "options": [
                    "NOT_YET",
                    "APPROVED",
                    "BAD_SCHEDULE"
                    ]
            }
            ];


        var o = 4;
        for (var m in materias) {
            o++;
            let ddQuestion = new DropDownQuestion();
            ddQuestion.key = materias[m].subject_name;
            ddQuestion.text = materias[m].subject_name;

            for (var i = 0; i < materias[m].date.length; i++) {
                ddQuestion.options.push({key: materias[m].date[i], value: materias[m].date[i]});
            }

            for (var i = 0; i < materias[m].options.length; i++) {
                ddQuestion.options.push({key: materias[m].options[i], value: materias[m].options[i]});
            }
            ddQuestion.order = o;
            this.questionModel.questions.push(ddQuestion);
        }


        this.questionModel.questions.sort((a, b) => a.order - b.order);



            var p = this.subjectService.getSubjects();

            console.log(p);







    }





}

