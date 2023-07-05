import {Person} from "./Person"

let person1 : Person = new Person ("Pepe", 25, "Santa Catalina");
person1.printName();
console.log(person1.yearOfBirth(2023));
person1.setAddress("juana de arco");
console.log(person1.getAdress());