import { asyncHandler, buildResponse } from "../../helpers";
import { BookService } from "./service";

const{sendSuccessRes} = buildResponse

class BooksController {
    private service = BookService;

    // create a new book
    public createBooks = asyncHandler(async (req, res) => {
        const { id, title, author, genre, yearPublished } = req.body as { id: number, title: string, author: string, genre: string, yearPublished: string };

        const response = await this.service.createBook({ id, title, author, genre, yearPublished });
        return sendSuccessRes({
            res,
            statusCode: 201,
            data: response,
            message: "book created successfully"
        });
    });

    // fetch a book by id
    public getBookById = asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };

        const response = await this.service.getBookById(Number(id));
        return sendSuccessRes({
            res,
            statusCode: 200,
            data: response,
            message: "book fetched successfully"
        });
    });

    // fetch all books
    public getAllBooks = asyncHandler(async (req, res) => {
        const response = await this.service.getAllBooks();
        return sendSuccessRes({
            res,
            statusCode: 200,
            data: response,
            message: "books fetched successfully"
        });
    });

    // delete a book by id
    public deleteBookById = asyncHandler(async (req, res) => {
        const { id } = req.params as { id: string };

        const response = await this.service.deleteBookById(Number(id));
        return sendSuccessRes({
            res,
            statusCode: 204,
            data: response,
            message: "book deleted successfully"
        });
    });
}
export const BookController = new BooksController()