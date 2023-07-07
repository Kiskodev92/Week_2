import {Book} from "./Book"
import {Library} from "./Library"
let libro1 : Book = new Book ("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
let libro2 : Book = new Book ("Juego de tronos", 660, "685861oausdh", "George R.R.Martin", "Planeta Agostini");
let libro3 : Book = new Book ("Memorias de Idhun", 700, "6ca65s1ca", "Laura Gallego", "Salamandra");
let libreria:Library = new Library([libro1,libro2,libro3],"La Habana","Rowling")

console.log(libreria.toString());
console.log(libreria.getNumbersofbooks());
console.log(libreria.FindAutor("Tolkien"));