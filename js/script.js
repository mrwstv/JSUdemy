"use strict";

let number = 1;

console.log(4/-0);
console.log('string'*9);

const person = "Alex";

const buulingovnoe = false;

for(var i=0; i<10; i++) {}

console.log(i);

let und;
console.log(und);

const obj = {
    name: "Pennies",
    age: 2754,
    isMarried: false,
    sex: null
};

//console.log(obj.sex);

console.log(obj["name"]);

let arr = ['pus.png', 'ascu.png', 'titsh.png', 1337, null, {}, []];
console.log(arr[4]);

const max = BigInt(Number.MAX_SAFE_INTEGER) + 5n;
console.log(max);

let id = Symbol("id");
let id2 = Symbol("id");

obj[id] = 1;
//alert(obj[id]);

// const result = confirm("Are u here?");
// console.log(result);

// const answer = +prompt("What is ur name?", "");
// console.log(answer + 5);

const answers = [];

// answers[0] = prompt('How is your name?', '');
// answers[1] = prompt('How is your surname?', '');
// answers[2] = prompt('How old are you?', '');

console.log(typeof(answers));
console.log(typeof(null));

const category = 'toys';

console.log(`http://someurl.com/${category}/5`);

const user = "Ivan";

alert(`Hi, ${user}`);

console.log('arr' + " - object");
console.log(4 + +"5");

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2+2*2 !== '6');

const isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);