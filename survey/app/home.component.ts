import { Component } from '@angular/core';
import {Survey} from './inputs/survey';
import {QuestionModel} from './inputs/question-model';
import {TextboxQuestion} from './inputs/textbox-question';
import {DropDownQuestion} from './inputs/dropdown-question';
import {FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';




@Component({
  selector: 'my-home',
  templateUrl : './app/templates/home_template.html',
  styleUrls: ['../styles.css']

})
export class HomeComponent {
    questionModel = new QuestionModel();
    constructor(){

        let question = new TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Apellido';
        question.required = true;
        question.order = 2;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'firstName';
        question.text = 'Nombre';
        question.required = true;
        question.order = 1;
        this.questionModel.questions.push(question);

        question = new TextboxQuestion();
        question.key = 'emailAddress';
        question.text = 'Email';
        question.required = false;
        question.type = 'email';
        question.order = 3;
        this.questionModel.questions.push(question);



        let ddQuestion = new DropDownQuestion();
        ddQuestion.key = 'country';
        ddQuestion.text = 'Country';
        ddQuestion.options.push({key:'usa',value:'USA'});
        ddQuestion.options.push({key:'germany',value:'Germany'});
        ddQuestion.options.push({key:'canada',value:'Canada'});
        ddQuestion.options.push({key:'australia',value:'Australia'});
        ddQuestion.order = 4;
        this.questionModel.questions.push(ddQuestion);

        this.questionModel.questions.sort((a,b) => a.order - b.order);
    }
}

