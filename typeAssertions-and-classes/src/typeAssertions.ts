// Type assertions
type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'hello';
let b = a as Two; 
let c = a as Three; 
console.log(b);
console.log(c);

let d = <Two>'world';
let e = <string | number>'world';

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
    if (c === 'add') {
        return a + b;
    }
    return '' + a + b;
}

console.log(addOrConcat(1, 2, 'add'));
console.log(addOrConcat(1, 2, 'concat'));

let val: string = addOrConcat(1, 2, 'concat') as string;
console.log(val);

// Be careful with type assertions as they can lead to runtime errors
let myVal: number = addOrConcat(1, 2, 'concat') as number;
