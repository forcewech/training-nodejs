interface IPerson {
    name: string;
    age: number;
    gender: string;
}

function updatePerson(person: IPerson, fieldsUpdate: Partial<IPerson>){
    return {...person, ...fieldsUpdate}
}

const person = {
    name: 'truong',
    age: 22,
    gender: 'male'
}
const personUpdate = {
    age: 18
}
const personRequire: Required<IPerson> = {
    name: 'truong',
    age: 22,
    gender: 'male'
}
const personReadOnly: Readonly<IPerson> = {
    name: 'truong',
    age: 22,
    gender: 'male'
}
const personRecord: Record<string, string> = {
    name: 'truong',
    gender: 'male'
}