import {Book} from "./Book"

let libro1 : Book = new Book ("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
libro1.setTitle("Introducción a Javascript");
libro1.setnPag(233);
libro1.setisbn("2344433-BC23333");
libro1.setAutor("Joseph Smith");
libro1.seteditorial("Now Editions");
console.log(libro1.toString())