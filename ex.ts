enum GenderType{
    Male = 'male',
    Female= 'female',
    genderNeutral= 'genderNeutral'
}

let studentID: number = 201610976;
let studentName: string = 'Minwook Kim';
let age: number = 26;
let gender: string = 'male';
let subject: string = 'javascript';
let courseCompleted: boolean = false;

let student1={
    studentID: 2018,
    studentName: '뚜도',
    age: 26,
    gender: GenderType.Female,
    subject: 'Mongo DB',
    courseCompleted: true
}

interface Student {//인터페이스의 첫번째 이름은 대문자
    readonly studentID: number;
    studentName: string;
    age?: number;
    gender: 'male' | 'female' | 'genderNeutral';
    subject: string;
    courseCompleted: boolean;
    //addComment(comment: string): string;
    addComment?:(comment: string) => string;
}

function getStudentDatails(studentID: number): Student{
    return {
        studentID: 201610976,
        studentName: 'Minwook Kim',
        // age: 26,
        gender: GenderType.Male,
        subject: 'Node js',
        courseCompleted: true
    };
}
console.log(getStudentDatails);

function saveStudentDetails(student: Student): void{

}

saveStudentDetails(student1);
