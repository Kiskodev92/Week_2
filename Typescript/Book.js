var Book = /** @class */ (function () {
    function Book(title, nPag, isbn, autor, editorial) {
        this.title = title;
        this.nPag = nPag;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
    Book.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setnPag = function (newnPag) {
        this.nPag = newnPag;
    };
    Book.prototype.getnPag = function () {
        return this.nPag;
    };
    Book.prototype.setisbn = function (newisbn) {
        this.isbn = newisbn;
    };
    Book.prototype.getisbn = function () {
        return this.isbn;
    };
    Book.prototype.setAutor = function (newAutor) {
        this.autor = newAutor;
    };
    Book.prototype.getAutor = function () {
        return this.autor;
    };
    Book.prototype.seteditorial = function (neweditorial) {
        this.editorial = neweditorial;
    };
    Book.prototype.geteditorial = function () {
        return this.editorial;
    };
    Book.prototype.toString = function () {
        return this.getTitle() + this.getnPag() + this.getisbn() + this.getAutor() + this.geteditorial();
    };
    return Book;
}());
var libro1 = new Book("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
libro1.setTitle("Introducción a Javascript");
libro1.setnPag(233);
libro1.setisbn("2344433-BC23333");
libro1.setAutor("Joseph Smith");
libro1.seteditorial("Now Editions");
console.log(libro1.toString());
