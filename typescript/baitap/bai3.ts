/*Bài 3: Viết một class Employee với các thông tin firstName 
(thuộc tính ko thể thay đổi), lastName (thuộc tính ko thể thay đổi), 
age, position, salary Với các method, getter, setter của các thuộc tính, 
showInfo()- trả về chuỗi firstName + lastName, updateAge(age: number) , 
increaseSalary(percentage: number) (sử dụng try catch ở đây để handle error)*/

class Employee {
    private readonly firstName: string;
    private readonly lastName: string;
    private age: number;
    private position: string;
    private salary: number;

    constructor(firstName: string, lastName: string, age: number, position: string, salary: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    public getFirstName(): string {
        return this.firstName;
    }

    public getLastName(): string {
        return this.lastName;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public getPosition(): string {
        return this.position;
    }

    public setPosition(position: string): void {
        this.position = position;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number): void {
        this.salary = salary;
    }

    public showInfo(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public updateAge(age: number): void {
        this.age = age;
    }
    public increaseSalary(percentage: number): void{
        try {
            if(percentage < 0){
                throw new Error('Percentage phải lớn hơn 0')
            }
            this.salary = this.salary + (this.salary * (percentage/100))
        } catch (error) {
            console.error(error)
        }
    }
}