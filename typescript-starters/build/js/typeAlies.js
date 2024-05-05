"use strict";
let id = 1234;
let guitaris3t = {
    name: 'John',
    age: 40,
    isAlive: true,
    albums: ['Album1', 'Album2']
};
console.log(guitaris3t);
function move(direction) {
    console.log(`Moving ${direction}`);
}
move('left');
move('right');
move('up');
move('down');
// move('north'); // Error
let userName;
userName = 'John';
let worker = {
    name: 'John',
    age: 40,
    company: 'Google'
};
console.log(worker);
let sum = (a, b) => a + b;
console.log(sum(7, 2));
// Functions without type
let sumNum = (a, b) => a + b;
console.log(sumNum(9, 2));
// function without return
let sayHello = () => {
    console.log('Hello!!!');
};
sayHello();
let substract = function (c, d) {
    return c - d;
};
console.log(substract(14, 2));
let multiply = (a, b) => a * b;
console.log(multiply(5, 4));
let divide = (a, b) => a / b;
console.log(divide(10, 2));
// optional parameters
let greet = (name) => {
    console.log(`Hello ${name || 'Unknown'}`);
};
greet();
greet('Baqar');
// Rest parameters
let addAll = (...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr);
};
console.log(addAll(1, 2, 3, 4, 5));
// never
let throwError = (message) => {
    throw new Error(message);
};
