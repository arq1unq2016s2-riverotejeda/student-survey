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
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
var subject_service_1 = require('./services/subject.service');
var http_1 = require("@angular/http");
var survey_service_1 = require("./services/survey.service");
var HomeComponent = (function () {
    function HomeComponent(http, _dataService) {
        this.http = http;
        this._dataService = _dataService;
    }
    HomeComponent.prototype.getSubjects = function () {
        var _this = this;
        this._dataService.GetAll()
            .subscribe(function (data) { return _this.mySubjects = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP GET Service"); }, // in case of failure show this message
        function () { return console.log("Job Done Get !"); } //run this code in all cases
        );
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'my-home',
            templateUrl: './app/templates/home_template.html',
            //styleUrls: ['../bootstrap.css']
            providers: [subject_service_1.SubjectService, survey_service_1.SurveyService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, subject_service_1.SubjectService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map