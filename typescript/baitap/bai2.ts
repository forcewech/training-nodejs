/*Bài 2: Viết một function để update giá trị của một object (sử dụng các kiến thức typescipt đã học)

input:
- một object có các thuộc tính name: string, age: number, gender: enum(male, female, other)
- propertyName (field cần thay đổi)
- newValue

output: 
- object với thuộc tính đã được thay đổi*/

interface MyObject {
    [key: string]: any;
}
enum EGender {
    male,
    female,
    other
}
function updateObject<T extends MyObject>(obj: T, key: keyof T, value: T[keyof T]): T {
    return {
        ...obj, 
        [key]: value 
    };
}

const myObject: {
    name: string,
    age: number,
    gender: EGender
} = {
    name: "John",
    age: 30,
    gender: EGender.female
};

const updatedObject = updateObject(myObject, "age", 35);
