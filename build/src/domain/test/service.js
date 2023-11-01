"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const helpers_1 = require("../../helpers");
// dummy database
const booksDB = [];
class Book {
    createBook(props) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = booksDB.find((item) => item.id === props.id);
            if (book) {
                return (0, helpers_1.throwError)(400, { message: "Book already exist" });
            }
            const createbook = booksDB.push({
                id: props.id,
                title: props.title,
                author: props.author,
                genre: props.genre,
                yearPublished: props.yearPublished,
            });
            return createbook;
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let book = booksDB.find((item) => item.id === id);
            if (!book) {
                return (0, helpers_1.throwError)(404, { message: "No such book found" });
            }
            return book;
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return booksDB;
        });
    }
    deleteBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let index = booksDB.findIndex((item) => item.id === id);
            if (index !== -1) {
                booksDB.splice(index, 1);
            }
            else {
                return (0, helpers_1.throwError)(404, { message: "No such book found" });
            }
            return booksDB;
        });
    }
}
``;
exports.BookService = new Book();
