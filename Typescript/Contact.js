"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
var Person_1 = require("./Person");
var Contact = /** @class */ (function () {
    function Contact() {
        this.people = [];
    }
    Contact.prototype.printCalendar = function () {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var array = _a[_i];
            console.log(array.name + " " + array.age + " " + array.getAdress());
        }
    };
    return Contact;
}());
exports.Contact = Contact;
var contacto = new Contact();
var person1 = new Person_1.Person("Pepe", 25, "Santa Catalina");
contacto.people.push(person1);
contacto.printCalendar();
