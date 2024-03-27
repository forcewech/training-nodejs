//primitives type
const _number: number = 1;
const _string: string = 'string';
const _boolean: boolean = true;

let _any: any = 1;
_any = 'string';
_any = true;

const _arrays: number[] = [1, 2];
const _arrays2: Array<number> = [1, 2];

enum EColor { Red, Green, Blue };
const _enum: EColor = EColor.Blue;

function _void(): void {
    alert("This is my warning message");
}

//Inferred type
let count = 123;

//Object type
const Person: { name: string, age: number, gender: string } = {
    name: "truong",
    age: 22,
    gender: "Male"
}

//Optional Properties
const Person2: { name: string, age: number, gender?: string } = {
    name: "truong",
    age: 22
}

//Type aliases
type Year = number;

const _year: Year = 2022;

type Person = {
    name: string;
    gender: string;
}

const student: Person = {
    name: "Truong",
    gender: "Male"
}

//Type Assertions
interface IPerson {
    name: string;
    age: number;
    gender: string;
}

const person4 = {
    name: 'truong',
    age: 18,
    gender: 'male'
} as Person