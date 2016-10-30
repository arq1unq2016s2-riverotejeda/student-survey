"use strict";
var Subject = (function () {
    function Subject() {
    }
    return Subject;
}());
exports.Subject = Subject;
var SubjectStatusTranslator = (function () {
    function SubjectStatusTranslator() {
    }
    //private NOT_YET = "Aún no la voy a cursar";
    //private APPROVED = "Ya la aprobé";
    //private BAD_SCHEDULE: "No puedo cursar en ese horario",
    SubjectStatusTranslator.subject_status = {
        not_yet: "Aún no la voy a cursar",
        approved: "Ya la aprobé",
        bad_schedule: "No puedo cursar en ese horario",
    };
    return SubjectStatusTranslator;
}());
exports.SubjectStatusTranslator = SubjectStatusTranslator;
//# sourceMappingURL=subject.js.map