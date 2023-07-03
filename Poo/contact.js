/*Reto 7
• Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
• El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
inicializar el array.
• Crear un método llamado printPersons que imprima cada uno de los atributos de cada
objeto Person. */
let {Persona}= require ("./Persona")

class Contact {
    constructor() {
        this.array=[]
    }
    printPersona(){
        for (let person of this.array){
            person.printAll()
        }
    }
};

module.exports ={Contact};
