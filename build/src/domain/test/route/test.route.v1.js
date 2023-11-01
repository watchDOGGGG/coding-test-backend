"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_1 = require("./validation");
const controller_1 = require("../controller");
const router = express_1.default.Router();
router.post('/createBook', validation_1.validateRoute.createBook, controller_1.BookController.createBooks);
router.get('/getbook/id/:id', validation_1.validateRoute.getBookById, controller_1.BookController.getBookById);
router.get('/get-all-books', controller_1.BookController.getAllBooks);
router.delete('/delete-book/id/:id', validation_1.validateRoute.deleteBookById, controller_1.BookController.deleteBookById);
exports.default = router;
