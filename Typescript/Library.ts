import {Book} from "./Book"
class Library{
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
    
}
let libro1 : Book = new Book ("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
console.log(libro1.toString());