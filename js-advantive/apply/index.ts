function calculateSum(a:number, b:number, c:number):number {
  return a + b + c;
}

const numbers = [1, 2, 3];
const sum = calculateSum.apply(null, numbers);