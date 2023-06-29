/*Reto 1
1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
“dia1”, “dia2” etc..
2. Para los retos de hoy trabajaremos desde la rama “dia1”.
3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
tener como mínimo 2 parámetros de entrada.*/
/*Reto 2
Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
(índice de masa corporal) de cualquier persona que se haya creado como un objeto de la
clase.*/
class Persona {
    constructor(pelo, altura, sexo, edad, peso){
        this.pelo = pelo;
        this.altura = altura;
        this.sexo = sexo;
        this.edad = edad;
        this.peso = peso;
    }
    imc(){
       return this.peso / Math.pow(this.altura, 2)* 10000;
    }
}

let paco = new Persona("Rubio", 183, "M", 35, 80);
console.log(paco.imc())

