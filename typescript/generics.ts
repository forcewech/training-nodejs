const getData = <T> (data: T[]): Array<T> => {
    return data
}

getData<string>(['cat', 'dog', 'tiger'])

interface IPerson {
    name: string;
    age: number;
    gender: string;
}

interface Car {
    name: string;
    color: string;
    price: number;
}

interface List<T> {
    length: number;
    [index: number] : T;
}

const personList: List<IPerson> = [
    {
        name: 'truong',
        age: 22,
        gender: 'male'
    }
]

const carList: List<Car> = [
    {
        name: 'Porche',
        color: 'yellow',
        price: 5000000000
    }
]