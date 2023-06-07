"use strict";

class Employee {
    private _id:number;
    private _name:string;
    private _address: string;


    constructor(id: number, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }


}

let employee1 = new Employee(1,"2","9");
console.log(employee1);