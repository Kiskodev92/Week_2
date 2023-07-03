let {Persona} = require("./Persona");
let {Contact} = require("./contact");

let pedro = new Persona ("Rubio", 189, "M", "Griego", 70, 2000,["comer", "entrenar", "andar"])
let test = new Contact()
test.array.push(pedro)
test.printPersona();