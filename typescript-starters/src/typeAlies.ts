// Type Alias
type StringOrNumber = string | number;

type StringOrNumberArray = (string | number)[];

type Guitaris3t = {
    name: string,
    age: number,
    isAlive: boolean,
    albums?: StringOrNumberArray
}

type userId = StringOrNumber;

let id: userId = 1234;

let guitaris3t: Guitaris3t = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
};

console.log(guitaris3t);

// Literal types
type Direction = 'left' | 'right' | 'up' | 'down';

function move(direction: Direction) {
    console.log(`Moving ${direction}`);
}

move('left');
move('right');
move('up');
move('down');
// move('north'); // Error

let userName: 'John' | 'Dave' | 'Jane';

userName = 'John';
// userName = 'David'; // Error

// Intersection
type Person3 = {
    name: string,
    age: number
};

type Employee = {
    company: string
};

type Worker3 = Person3 & Employee;

let worker: Worker3 = {
    name: 'John',
    age: 40,
    company: 'Google'
};

console.log(worker);

// Functions
type Adder = (a: number, b: number) => number;

let sum: Adder = (a, b) => a + b;

console.log(sum(7, 2));

// Functions without type
let sumNum = (a: number, b: number):number => a + b;

console.log(sumNum(9, 2));

// function without return
let sayHello = (): void => {
    console.log('Hello!!!');
};

sayHello();

let substract = function (c: number, d: number): number {
  return c - d;
}

console.log(substract(14, 2));

type mathType = (a: number, b: number) => number;

let multiply: mathType = (a, b) => a * b;

console.log(multiply(5, 4));

interface mathInterface {
    (a: number, b: number): number
}

let divide: mathInterface = (a, b) => a / b;

console.log(divide(10, 2));

// optional parameters
let greet = (name?: string): void => {
    console.log(`Hello ${name || 'Unknown'}`);
};

greet();
greet('Baqar');

// Rest parameters
let addAll = (...numbers: number[]): number => {
    return numbers.reduce((prev, curr) => prev + curr);
};

console.log(addAll(1, 2, 3, 4, 5));

// never

let throwError = (message: string): never => {
    throw new Error(message);
};







