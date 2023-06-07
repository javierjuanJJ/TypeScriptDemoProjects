function add2(number1:number,number2:number, number3?:number):number {
    return number3? number1 + number2 + number3 : number1 + number2;
}
console.log(add2(1,2));
console.log(add2(1,2,3));

const sub = (number1:number,number2:number, number3:number = 10): number => number1 - number2 - number3;

console.log(sub(1,2));
console.log(sub(1,2,3));


const mult = function (number1:number,number2:number):number {
    return number1 * number2;
}

console.log(mult(2,2));

function add3(number1:number,number2:number, ...number3:number[]):number {
    return number1 + number2 + number3.reduce((a,b)=> a+ b, 0) ;
}


console.log(add3(2,2, 6 , 9, 10 ));

function getItems<Type>(items: Type[]): Type[] {

    return new Array<Type>().concat(items);
}

let concatresult = getItems<number>([1,2,3,6,9,8,4,56,]);
console.log(concatresult);