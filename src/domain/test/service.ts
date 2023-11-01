import { throwError } from "../../helpers";
import { Books } from "./service.interface";

// dummy database
const booksDB: Books[] = [];
class Book {
  public async createBook(props: Books) {
    let book = booksDB.find((item) => item.id === props.id);
    if (book) {
      return throwError(400, { message: "Book already exist" });
    }
    const createbook = booksDB.push({
      id: props.id,
      title: props.title,
      author: props.author,
      genre: props.genre,
      yearPublished: props.yearPublished,
    });
    return createbook;
  }

  public async getBookById(id: number) {
    let book = booksDB.find((item) => item.id === id);
    if (!book) {
      return throwError(404, { message: "No such book found" });
    }
    return book;
  }

  public async getAllBooks() {
    return booksDB;
  }

  public async deleteBookById(id: number) {
    let index = booksDB.findIndex((item) => item.id === id);
    if (index !== -1) {
      booksDB.splice(index, 1);
    } else {
      return throwError(404, { message: "No such book found" });
    }
    return booksDB;
  }
}
``
export const BookService = new Book();
