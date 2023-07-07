import {Book} from "./Book"
export class Library{
    private books : Book[];
    private address : string;
    private manager : string;
    constructor(books : Book[], address : string, manager : string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    public setAddress(newAddress :string):void{
        this.address = newAddress;
    }
    public getAddress():string{
        return this.address;
    }
    public setManager(newManager :string):void{
        this.manager = newManager;
    }
    public getManager():string{
        return this.manager;
    }

    toString():string{
        return `Book 1
        ${libro1.toString()}`
    }
    getNumbersofbooks():number
    {
        return this.books.length
    }
    FindAutor(author: string): Book[] {
        return this.books.filter(valor => valor.getAutor() == author)
    }
}
let libro1 : Book = new Book ("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
let libro2 : Book = new Book ("Juego de tronos", 660, "685861oausdh", "George R.R.Martin", "Planeta Agostini");
let libro3 : Book = new Book ("Memorias de Idhun", 700, "6ca65s1ca", "Laura Gallego", "Salamandra");
let libreria:Library = new Library([libro1,libro2,libro3],"La Habana","Rowling")
