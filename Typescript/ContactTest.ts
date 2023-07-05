import {Person} from "./Person"
import {Contact} from "./Contact"


let contacto : Contact = new Contact ();
let person1 : Person = new Person ("Laia", 25, "Santa Catalina de Genoveva"); 
contacto.people.push(person1);
contacto.printCalendar();