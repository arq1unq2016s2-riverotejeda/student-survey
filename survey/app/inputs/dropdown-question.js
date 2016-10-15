"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require('./question-base');
var DropDownQuestion = (function (_super) {
    __extends(DropDownQuestion, _super);
    function DropDownQuestion() {
        _super.call(this);
        this.options = [];
        this.controlType = 'dropdown';
    }
    return DropDownQuestion;
}(question_base_1.QuestionBase));
exports.DropDownQuestion = DropDownQuestion;
//# sourceMappingURL=dropdown-question.js.map