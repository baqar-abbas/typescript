let strArray: string[] = ['one', 'two', 'three'];

let guitars: (string|number)[] = ['EVH', 'Fender', 5150];

let mixedData: (string|number|boolean)[]= ['John', 40, 'Doe', 30, true];

strArray[0] = 'Jane';
strArray.push('Doe');
// strArray.push(40); // Error

console.log(strArray);

guitars[0] = 4250;
guitars.push('Ibanez');
guitars.unshift('Gibson');
// guitars.push(true); // Error
console.log(guitars);

// Tuple

let person2: [string, number] = ['John', 40];
person2[0] = 'Jane';
person2.push('Doe');
// person2.push(true); // Error
console.log(person2);

let myTupleg: [string, number, boolean] = ['John', 40, true];
myTupleg[0] = 'Jane';
console.log(myTupleg);

// Objects
const exampleObj: {prop1: string, prop2: number} = {
    prop1: 'Hello',
    prop2: 20
}

console.log(exampleObj);

type Guitarist = {
    name: string,
    age: number,
    isAlive: boolean,
    albums?: (string|number)[]
}

let guitarist: Guitarist = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
}

console.log(guitarist);

const greetGuitarist = (guitarist: Guitarist) => {
    console.log(`Hello ${guitarist.name} guitarist`);
}

greetGuitarist(guitarist);

// Interface for objects
// Instead of using type, we can use interface to define objects as well
interface Guitarist2 {
    name: string,
    age: number,
    isAlive: boolean,
    albums?: (string|number)[]
}

let guitarist2: Guitarist2 = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
}

console.log(guitarist2);

// Enum
enum Grade {
    U=1,
    D,
    C,
    B,
    A
}

let myGrade: Grade = Grade.B;
console.log(myGrade); // 3








