class Employee{//클래스
    // private _fullName: string;
    // age: number;
    // jobTitle: string;
    // hourlyRate: number;
    // workingHoursPerWeek: number;

    //consrtuctor의 매개변수에 Access modifiers 직접적용
    constructor(
        private _fullName: string,
        private _age: number, 
        private _jobTitle: string,
        private _hourlyRate: number, 
        public workingHoursPerWeek: number){//암묵적으로 클래스의 필드로 적용이됨.
            // this._fullName = fullName;
            // this.age = age;
            // this.jobTitle = jobtitle;
            // this.hourlyRate = hourlyRate;
            // this.workingHoursPerWeek = workingHoursPerWeek;
        }

        get fullName(){
            return this._fullName;
        }
        set fullName(value: string){
            this._fullName = value;
        }

        printEmployeeDetails = ():void => {
            console.log(`${this._fullName}의 직업은 ${this._jobTitle} 이고, 나이는 ${this._age}이며, 
            일주일의 수입은 ${this._hourlyRate * this.workingHoursPerWeek} 달러 이다.`);
        }
}

let employee1: Employee = new Employee('민욱이', 26, '예비 개발자', 52, 100 );

employee1.printEmployeeDetails();
