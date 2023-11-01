import { Books } from "../service.interface";
import { BookService } from "../service";

const booksDB: Books[] = [];

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
      it("should create a new book", async () => {
        const result = await BookService.createBook(bookData1);
        expect(result).toEqual(1);
      });

      it("should return an error if the book already exists", async () => {
        try {
          await BookService.createBook(bookData1);
          fail("An error should be thrown for duplicate book creation");
        } catch (error: any) {
          expect(error.message).toBe("Book already exist");
        }
      });
    });

    // Get book by ID tests
    describe("getBookById", () => {
      it("should return a book by ID", async () => {
        booksDB.push(bookData1);
        const result = await BookService.getBookById(1);
        expect(result).toEqual(bookData1);
      });

      it("should return an error if the book does not exist", async () => {
        try {
          await BookService.getBookById(12);
        } catch (error: any) {
          expect(error.message).toBe("No such book found");
          expect(error.status).toBe(404);
        }
      });
    });

    // Get all books tests
    describe("getAllBooks", () => {
      it("should return all books", async () => {
        booksDB.push(bookData1, bookData2);
        const result = await BookService.getAllBooks();
        expect(Array.isArray(result)).toBeTruthy();
        expect(result).toEqual([bookData1]);
      });
    });

    // Delete book by ID tests
    describe("deleteBookById", () => {
      it("should delete a book by ID", async () => {
        const result = await BookService.deleteBookById(1);
        expect(Array.isArray(result)).toBeTruthy();
        expect(result).toHaveLength(0);
      });

      it("should return an error if the book does not exist when trying to delete", async () => {
        try {
          await BookService.deleteBookById(1);
        } catch (error: any) {
          expect(error.message).toBe("No such book found");
          expect(error.status).toBe(404);
        }
      });
    });
 });