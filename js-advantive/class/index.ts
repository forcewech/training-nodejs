/*
Bài tập: Viết một class Employee với các thông tin firstName, lastName, age, position, salary
Với các method showInfo(), increaseSalary(percentage: number) (sử dụng try catch ở đây để handle error)
*/

interface IEmployee {
    firstName: string;
    lastName: string;
    age: string;
    position: string;
    salary: number;
}

class Employee {
    private firstName: string;
    private lastName: string;
    private age: string;
    private position: string;
    private salary: number;
    constructor(employee: IEmployee){
        this.firstName = employee.firstName;
        this.lastName = employee.lastName;
        this.age = employee.age;
        this.position = employee.position;
        this.salary = employee.salary;
    }
    public showInfo():void {
        console.log(`${this.lastName} ${this.firstName}
                    ${this.age}
                    ${this.position}
                    ${this.salary}
        `)
    }
    public increaseSalary(percentage: number):number {
        if(percentage < 0){
            throw new Error('percentage must > 0');
        }
        const amount = this.salary * percentage/100;
        return this.salary += amount
    }
}