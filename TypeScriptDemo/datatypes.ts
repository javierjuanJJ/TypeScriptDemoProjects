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

let swapNumbs: [number, number];

function swapNumbers(num1:number, num2:number):[number, number] {
    return [num1 , num2];
}

swapNumbs = swapNumbers(10, 20);

console.log(swapNumbs);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let department:any;

department = "2a";
console.log(department);

department = 2;
console.log(department);

function add(num1: number, num2: number): any {
    return num1 + num2;
}

department = add(2, 9);
console.log(department);