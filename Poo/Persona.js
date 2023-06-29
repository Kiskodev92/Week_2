/*Reto 1
1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
“dia1”, “dia2” etc..
2. Para los retos de hoy trabajaremos desde la rama “dia1”.
3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
tener como mínimo 2 parámetros de entrada.*/

class Persona {
    constructor(pelo, altura, sexo, nacionalidad, peso, yearOfBirth){
        this.pelo = pelo;
        this.altura = altura;
        this.sexo = sexo;
        this.nacionalidad = nacionalidad;
        this.peso = peso;
        this.yearOfBirth = yearOfBirth;
    }
/*Reto 2
Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
(índice de masa corporal) de cualquier persona que se haya creado como un objeto de la
clase.*/
    imc(){
       return this.peso / Math.pow(this.altura, 2)* 10000;
    }
/*Reto 3
Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
como parámetro el año y calcule la edad de la persona. */
    edad(){
        return 2023 - this.yearOfBirth;
    }
}

let paco = new Persona("Rubio", 183, "M", "Griego", 80, 1985);
console.log(paco.imc())
console.log(paco.edad())

