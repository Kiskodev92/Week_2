"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var Book_1 = require("./Book");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.setAddress = function (newAddress) {
        this.address = newAddress;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setManager = function (newManager) {
        this.manager = newManager;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.toString = function () {
        return "Book 1\n        ".concat(libro1.toString());
    };
    Library.prototype.getNumbersofbooks = function () {
        return this.books.length;
    };
    Library.prototype.FindAutor = function (author) {
        return this.books.filter(function (valor) { return valor.getAutor() == author; });
    };
    return Library;
}());
exports.Library = Library;
var libro1 = new Book_1.Book("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
var libro2 = new Book_1.Book("Juego de tronos", 660, "685861oausdh", "George R.R.Martin", "Planeta Agostini");
var libro3 = new Book_1.Book("Memorias de Idhun", 700, "6ca65s1ca", "Laura Gallego", "Salamandra");
var libreria = new Library([libro1, libro2, libro3], "La Habana", "Rowling");
