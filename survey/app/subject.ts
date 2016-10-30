export class Subject {
    subject_name: string;
    date: string[];
    options: string[];
    general_options: string[]
}

export class SubjectStatusTranslator{
    //private NOT_YET = "Aún no la voy a cursar";
    //private APPROVED = "Ya la aprobé";
    //private BAD_SCHEDULE: "No puedo cursar en ese horario",

    public static subject_status = {
        not_yet: "Aún no la voy a cursar",
        approved: "Ya la aprobé",
        bad_schedule: "No puedo cursar en ese horario",
    }

}