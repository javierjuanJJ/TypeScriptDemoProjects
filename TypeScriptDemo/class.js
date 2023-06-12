"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        this._id = id;
        this._name = name;
        this._address = address;
    }
    static getone() {
        return 50;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    login() {
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
let { id, name, address } = new Employee(1, "2", {
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
    constructor(id, name, address) {
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
