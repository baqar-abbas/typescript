"use strict";
let strArray = ['one', 'two', 'three'];
let guitars = ['EVH', 'Fender', 5150];
let mixedData = ['John', 40, 'Doe', 30, true];
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
let person2 = ['John', 40];
person2[0] = 'Jane';
person2.push('Doe');
// person2.push(true); // Error
console.log(person2);
let myTupleg = ['John', 40, true];
myTupleg[0] = 'Jane';
console.log(myTupleg);
// Objects
const exampleObj = {
    prop1: 'Hello',
    prop2: 20
};
console.log(exampleObj);
let guitarist = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
};
console.log(guitarist);
const greetGuitarist = (guitarist) => {
    console.log(`Hello ${guitarist.name} guitarist`);
};
greetGuitarist(guitarist);
let guitarist2 = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
};
console.log(guitarist2);
// Enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
let myGrade = Grade.B;
console.log(myGrade); // 3
