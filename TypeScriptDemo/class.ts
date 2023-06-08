"use strict";

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

interface IEmployees extends Address {
    salary: number;
}

class Employee implements login {
    private _id: number;
    private _name: string;
    private _address: Address;

    static getone(): number {
        return 50;
    }


    constructor(id: number, name: string, address: Address) {
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

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    login(): IEmployees {
        return {
            street: 'string',
            city: 'string',
            state: 'string',
            pin: 'string',
            salary: 1,
        };
    }


}

let employee1 = new Employee(1, "2", {
    street: 'string',
    city: 'string',
    state: 'string',
    pin: 'string',
});

let {id, name, address}: Employee = new Employee(1, "2", {
    street: 'string',
    city: 'string',
    state: 'string',
    pin: 'string',
});

console.log(id);
console.log(name);
console.log(address);

console.log(employee1);

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

}

let manager1 = new Manager(1, "2", {
    street: 'string',
    city: 'string',
    state: 'string',
    pin: 'string',
});
console.log(manager1);
console.log(Employee.getone());

export interface login {
    login(): IEmployees;
}
