"use strict";
let lname: string;

lname="Jon";
let nerName = lname.toUpperCase();
console.log(lname + nerName);

let age: number;
age = 15;
let result = age + parseInt("20");
console.log(result);

let isValid:boolean;
isValid = result > 35;
console.log(isValid);

let emptyList : string[];
emptyList = ["1","2","3"];
console.log(emptyList);

let depList : Array<number>;
depList=[1,2,3,4,5];
console.log(depList);

let result2 = depList.filter((num)=>{
    return num > 2;
});
let result3 = depList.find((num)=>{
    return num === 2;
})
console.log(result2);
console.log(result3);

let sum = depList.reduce((acc, num) => (acc + num));
console.log(sum);
//lname= 10;


const enum Color {
    Red, Green, Blue
}

let c:Color = Color.Blue;

console.log(c);