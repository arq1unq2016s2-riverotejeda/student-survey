export class Survey {
    constructor(
    public id: string,
    public student_name: string,
    public legajo: string,
    public selected_subjects: SelectedSubject[]) {  }
}

export class SelectedSubject {
    constructor(
        public subject: string,
        public status: string
    ){}
}