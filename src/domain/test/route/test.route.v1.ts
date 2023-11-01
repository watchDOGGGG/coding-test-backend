import express from 'express'
import { validateRoute } from './validation'
import { BookController } from '../controller'

const router = express.Router()

router.post('/createBook', validateRoute.createBook, BookController.createBooks)
router.get('/getbook/id/:id', validateRoute.getBookById, BookController.getBookById)
router.get('/get-all-books',  BookController.getAllBooks)
router.delete('/delete-book/id/:id', validateRoute.deleteBookById, BookController.deleteBookById)

export default router