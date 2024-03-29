interface IPerson {
    name: string;
    age: number;
    introduce: () => void;
  }
  
  const person: IPerson = {
    name: "John",
    age: 30,
    introduce: function () {
      console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    },
  };
  
  const greet: () => void = person.introduce.bind(person);
  greet();