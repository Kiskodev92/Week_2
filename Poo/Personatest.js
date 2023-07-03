let {Persona} = require("./Persona");
let {Contact} = require("./contact");
let maria = new Persona("morena", 162, "F", "Portuguesa", 52, 1992, ["comer", "entrenar", "andar"]);
let paco = new Persona("Rubio", 183, "M", "Griego", 80, 1985, ["Bailar", "Cocinar", "Dormir"]);
let contactos = new Contact();
contactos.array.push(maria, paco);
contactos.printPersona();

