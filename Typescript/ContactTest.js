"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Contact_1 = require("./Contact");
var contacto = new Contact_1.Contact();
var person1 = new Person_1.Person("Laia", 25, "Santa Catalina de Genoveva");
contacto.people.push(person1);
contacto.printCalendar();
