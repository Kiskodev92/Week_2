import {Person} from "./Person"

export class Contact{
    public people : Person[];
    constructor(){
        this.people=[]
    }
    printCalendar():void{
        for(let array of this.people){
            console.log(array.name + " " +array.age + " " + array.getAdress());
        } 
    }
}

let contacto : Contact = new Contact ();
let person1 : Person = new Person ("Pepe", 25, "Santa Catalina"); 
contacto.people.push(person1);
contacto.printCalendar();