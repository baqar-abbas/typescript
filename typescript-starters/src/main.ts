let username: string = 'Baqar';
console.log(username);

/* Basics of TypeScript */
let myName: string = 'John';
let meaningOfLife: number = 40;
let isLoading: boolean = true;
let myArray: number[] = [1, 2, 3];
let myTuple: [string, number] = ['John', 40];
let myAny: any = 'Hello World';
let myVoid: void;
let myNull: null = null;
let myUndefined: undefined = undefined;
// Union
let myUnion: string | number = 'John';
// Enum
enum Color {
  Red,
  Green,
  Blue
}
let myColor: Color = Color.Green;
console.log(myColor);

/* Functions */
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

/* Interfaces */
interface Person {
  name: string;
  age: number;
}
let person: Person = {
  name: 'John',
  age: 40
};

/* Classes */
class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  drive() {
    console.log('Driving');
  }
}
let car = new Car('BMW');
car.drive();

/* Generics */
function identity<T>(arg: T): T {
  return arg;
}
let output = identity<string>('Hello World');
console.log(output);

/* Type Inference */
let myVariable = 'Hello World';
// myVariable = 40; // Error

/* Arrow Functions */
let addNumbers = (a: number, b: number) => a + b;
console.log(addNumbers(2, 8));



