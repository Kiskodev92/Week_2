export class Book{
    title : string;
    nPag : number;
    isbn: string;
    autor: string;
    editorial : string;
    constructor(title : string, nPag : number, isbn: string, autor: string, editorial : string){
        this.title = title;
        this.nPag = nPag;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
    public setTitle(newTitle: string):void{
        this.title = newTitle;
    }
    public getTitle():string{
        return this.title;
    }
    public setnPag(newnPag: number):void{
        this.nPag = newnPag;
    }
    public getnPag():number{
        return this.nPag;
    }
    public setisbn(newisbn: string):void{
        this.isbn = newisbn;
    }
    public getisbn():string{
        return this.isbn;
    }
    public setAutor(newAutor: string):void{
        this.autor = newAutor;
    }
    public getAutor():string{
        return this.autor;
    }
    public seteditorial(neweditorial: string):void{
        this.editorial = neweditorial;
    }
    public geteditorial():string{
        return this.editorial;
    }
    toString():string{
        let respuesta : string = `
        Title - ${this.getTitle()}
        Numer of Pages - ${this.getnPag()}
        ISBN - ${this.getisbn()}
        Author - ${this.getAutor()}
        Editorial - ${this.geteditorial()}` ;
        return respuesta;
    }
}