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
exports.BookController = void 0;
const helpers_1 = require("../../helpers");
const service_1 = require("./service");
const { sendSuccessRes } = helpers_1.buildResponse;
class BooksController {
    constructor() {
        this.service = service_1.BookService;
        // create a new book
        this.createBooks = (0, helpers_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, title, author, genre, yearPublished } = req.body;
            const response = yield this.service.createBook({ id, title, author, genre, yearPublished });
            return sendSuccessRes({
                res,
                statusCode: 201,
                data: response,
                message: "book created successfully"
            });
        }));
        // fetch a book by id
        this.getBookById = (0, helpers_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.service.getBookById(Number(id));
            return sendSuccessRes({
                res,
                statusCode: 200,
                data: response,
                message: "book fetched successfully"
            });
        }));
        // fetch all books
        this.getAllBooks = (0, helpers_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.getAllBooks();
            return sendSuccessRes({
                res,
                statusCode: 200,
                data: response,
                message: "books fetched successfully"
            });
        }));
        // delete a book by id
        this.deleteBookById = (0, helpers_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const response = yield this.service.deleteBookById(Number(id));
            return sendSuccessRes({
                res,
                statusCode: 204,
                data: response,
                message: "book deleted successfully"
            });
        }));
    }
}
exports.BookController = new BooksController();
