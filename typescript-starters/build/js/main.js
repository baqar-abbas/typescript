"use strict";
let username = 'Baqar';
console.log(username);
/* Basics of TypeScript */
let myName = 'John';
let meaningOfLife = 40;
let isLoading = true;
let myArray = [1, 2, 3];
let myTuple = ['John', 40];
let myAny = 'Hello World';
let myVoid;
let myNull = null;
let myUndefined = undefined;
// Union
let myUnion = 'John';
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
console.log(myColor);
/* Functions */
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
let person = {
    name: 'John',
    age: 40
};
/* Classes */
class Car {
    constructor(name) {
        this.name = name;
    }
    drive() {
        console.log('Driving');
    }
}
let car = new Car('BMW');
car.drive();
/* Generics */
function identity(arg) {
    return arg;
}
let output = identity('Hello World');
console.log(output);
/* Type Inference */
let myVariable = 'Hello World';
// myVariable = 40; // Error
/* Arrow Functions */
let addNumbers = (a, b) => a + b;
console.log(addNumbers(2, 8));
