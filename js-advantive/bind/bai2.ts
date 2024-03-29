function add(a: number, b: number, c: number): number {
    return a + b + c;
}
  
const addWithDefault: (d: number) => number = add.bind(null, 2, 3);