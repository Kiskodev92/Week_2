"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var person1 = new Person_1.Person("Pepe", 25, "Santa Catalina");
person1.printName();
console.log(person1.yearOfBirth(2023));
person1.setAddress("juana de arco");
console.log(person1.getAdress());
