function greet1(message): void {
    console.log(`${message}, I'm ${this.name}.`);
  }
  
  const person1 = { name: "Alice" };
  const person2 = { name: "Bob" };
  
  greet1.call(person1, "Hi"); 
  greet1.call(person2, "Hello")