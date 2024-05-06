"use strict";
let a = 'hello';
let b = a;
let c = a;
console.log(b);
console.log(c);
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
};
console.log(addOrConcat(1, 2, 'add'));
console.log(addOrConcat(1, 2, 'concat'));
let val = addOrConcat(1, 2, 'concat');
console.log(val);
// Be careful with type assertions as they can lead to runtime errors
let myVal = addOrConcat(1, 2, 'concat');
