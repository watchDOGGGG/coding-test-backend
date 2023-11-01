import { body, param } from "express-validator";
import { validate } from "../../../helpers";

const createBook = [
    body('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required and must be a number"),
    body('title').isLength({ min: 1 }).trim().withMessage("Title must be specified."),
    body('author').isString().trim().withMessage('Authour is required'),
    body('genre').isString().trim().withMessage('Genre is required'),
    body('yearPublished').isString().withMessage('Published Date is required'),
    validate
]

const getBookById = [
    param('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required"),
    validate
]

const deleteBookById = [
    param('id').isLength({ min: 1 }).isNumeric().withMessage("Id is required"),
    validate
]
export const validateRoute = {
    createBook,
    getBookById,
    deleteBookById
}