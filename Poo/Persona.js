/*Reto 1
1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
“dia1”, “dia2” etc..
2. Para los retos de hoy trabajaremos desde la rama “dia1”.
3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
tener como mínimo 2 parámetros de entrada.*/

class Persona {
    constructor(pelo, altura, sexo, nacionalidad, peso, yearOfBirth, hobbies){
        this.pelo = pelo;
        this.altura = altura;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
    }
/*Reto 2
Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
(índice de masa corporal) de cualquier persona que se haya creado como un objeto de la
clase.*/
    imc(){
       return this.peso / (this.altura * 2)*100;
    }
/*Reto 3
Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
como parámetro el año y calcule la edad de la persona. */
    edad(age){
        return age - this.yearOfBirth;
    }
/*Reto 4
Añadir un método que se denomine printAll que muestre por consola cada uno de los
atributos de la clase Person seguido por “-” y el valor del atributo. */
    printAll(){
        console.log("Pelo - " + this.pelo + " Altura - " + this.altura + " Sexo - " + this.sexo + " Nacionalidad - " + this.nacionalidad + " Peso - " + this.peso + " Fecha nacimiento - " + this.yearOfBirth);
    }
/*Reto 5
Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
denominado printHobbies, que muestre por consola las aficiones de la persona. */
    printHobbies(){
        console.log(this.hobbies);
    }
}
let maria = new Persona("morena", 162, "F", "Portuguesa", 52, 1992, ["comer", "entrenar", "andar"]);
let paco = new Persona("Rubio", 183, "M", "Griego", 80, 1985, ["Bailar", "Cocinar", "Dormir"]);
// console.log(paco.imc());
// console.log(paco.edad());
// console.log(paco.printAll());
// console.log(paco.printHobbies());
/*Reto 6
• Guardar la clase Person en un fichero con extensión .js (person.js).
• Modificar ese fichero para exportar la clase.
• Importar la clase en otro fichero denominado personTest.js.
• Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
• Sube todos los cambios a tu rama “dia1”. */
module.exports ={Persona};
/*Reto 7
• Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.
• El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
inicializar el array.
• Crear un método llamado printPersons que imprima cada uno de los atributos de cada
objeto Person. */

/*Reto 8
• Guardar la clase Contacts en un fichero con extensión .js (contacts.js).
• Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
contactsTest.js.
• Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.
• Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama
“master/main”. En caso de tener conflicto soluciónalos.
• Haz una versión de esta subida. */