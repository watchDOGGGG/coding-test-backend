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
const service_1 = require("../service");
const booksDB = [];
const bookData1 = {
    id: 1,
    title: "Book 1",
    genre: "action",
    author: "Prince",
    yearPublished: "2022",
};
const bookData2 = {
    id: 2,
    title: "Book 2",
    genre: "action",
    author: "Prince",
    yearPublished: "2022",
};
// Define CRUD operations for books
describe("BookService", () => {
    // Reset database before each test
    beforeEach(() => {
        booksDB.length = 0;
    });
    // Create book tests
    describe("createBook", () => {
        it("should create a new book", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield service_1.BookService.createBook(bookData1);
            expect(result).toEqual(1);
        }));
        it("should return an error if the book already exists", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield service_1.BookService.createBook(bookData1);
                fail("An error should be thrown for duplicate book creation");
            }
            catch (error) {
                expect(error.message).toBe("Book already exist");
            }
        }));
    });
    // Get book by ID tests
    describe("getBookById", () => {
        it("should return a book by ID", () => __awaiter(void 0, void 0, void 0, function* () {
            booksDB.push(bookData1);
            const result = yield service_1.BookService.getBookById(1);
            expect(result).toEqual(bookData1);
        }));
        it("should return an error if the book does not exist", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield service_1.BookService.getBookById(12);
            }
            catch (error) {
                expect(error.message).toBe("No such book found");
                expect(error.status).toBe(404);
            }
        }));
    });
    // Get all books tests
    describe("getAllBooks", () => {
        it("should return all books", () => __awaiter(void 0, void 0, void 0, function* () {
            booksDB.push(bookData1, bookData2);
            const result = yield service_1.BookService.getAllBooks();
            expect(Array.isArray(result)).toBeTruthy();
            expect(result).toEqual([bookData1]);
        }));
    });
    // Delete book by ID tests
    describe("deleteBookById", () => {
        it("should delete a book by ID", () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield service_1.BookService.deleteBookById(1);
            expect(Array.isArray(result)).toBeTruthy();
            expect(result).toHaveLength(0);
        }));
        it("should return an error if the book does not exist when trying to delete", () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield service_1.BookService.deleteBookById(1);
            }
            catch (error) {
                expect(error.message).toBe("No such book found");
                expect(error.status).toBe(404);
            }
        }));
    });
});
