"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    return Library;
}());
var libro1 = new Book_1.Book("El hobbit", 300, "aoaicj213", "Tolkien", "Salvat");
console.log(libro1.toString());
