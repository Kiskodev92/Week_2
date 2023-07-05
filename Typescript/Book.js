"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
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
        var respuesta = "\n        Title - ".concat(this.getTitle(), "\n        Numer of Pages - ").concat(this.getnPag(), "\n        ISBN - ").concat(this.getisbn(), "\n        Author - ").concat(this.getAutor(), "\n        Editorial - ").concat(this.geteditorial());
        return respuesta;
    };
    return Book;
}());
exports.Book = Book;
