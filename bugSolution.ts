function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 5); // Correct usage. No type error.

function addAny(a: any, b: any): any {
  return a + b;
}

let result2 = addAny("hello", 5); // Works, but loses type safety.