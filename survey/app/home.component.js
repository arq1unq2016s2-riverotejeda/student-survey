"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var question_model_1 = require('./inputs/question-model');
var textbox_question_1 = require('./inputs/textbox-question');
var dropdown_question_1 = require('./inputs/dropdown-question');
var HomeComponent = (function () {
    function HomeComponent() {
        this.questionModel = new question_model_1.QuestionModel();
        var question = new textbox_question_1.TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Apellido';
        question.required = true;
        question.order = 1;
        this.questionModel.questions.push(question);
        question = new textbox_question_1.TextboxQuestion();
        question.key = 'firstName';
        question.text = 'Nombre';
        question.required = true;
        question.order = 2;
        this.questionModel.questions.push(question);
        question = new textbox_question_1.TextboxQuestion();
        question.key = 'legajo';
        question.text = 'Legajo';
        question.required = true;
        question.order = 3;
        this.questionModel.questions.push(question);
        question = new textbox_question_1.TextboxQuestion();
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
            var ddQuestion = new dropdown_question_1.DropDownQuestion();
            ddQuestion.key = materias[m].subject_name;
            ddQuestion.text = materias[m].subject_name;
            for (var i = 0; i < materias[m].date.length; i++) {
                ddQuestion.options.push({ key: materias[m].date[i], value: materias[m].date[i] });
            }
            for (var i = 0; i < materias[m].options.length; i++) {
                ddQuestion.options.push({ key: materias[m].options[i], value: materias[m].options[i] });
            }
            ddQuestion.order = o;
            this.questionModel.questions.push(ddQuestion);
        }
        this.questionModel.questions.sort(function (a, b) { return a.order - b.order; });
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './app/templates/home_template.html',
            styleUrls: ['../styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map