"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRoute = void 0;
const express_validator_1 = require("express-validator");
const helpers_1 = require("../../../helpers");
const createBook = [
    (0, express_validator_1.body)('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required and must be a number"),
    (0, express_validator_1.body)('title').isLength({ min: 1 }).trim().withMessage("Title must be specified."),
    (0, express_validator_1.body)('author').isString().trim().withMessage('Authour is required'),
    (0, express_validator_1.body)('genre').isString().trim().withMessage('Genre is required'),
    (0, express_validator_1.body)('yearPublished').isString().withMessage('Published Date is required'),
    helpers_1.validate
];
const getBookById = [
    (0, express_validator_1.param)('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required"),
    helpers_1.validate
];
const deleteBookById = [
    (0, express_validator_1.param)('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required"),
    helpers_1.validate
];
exports.validateRoute = {
    createBook,
    getBookById,
    deleteBookById
};
