import app from "../../../app";
import request from "supertest";

describe("Book api integration test", () => {
    const testData = {
        id: 1,
        title: "Book 1",
        author: "Prince randy",
        genre: "Action",
        yearPublished: "2023",
       };
       
       const invalidData = {
        id: 1,
        title: "Book 1",
        author: "Prince randy",
        genre: "Action",
        yearPublished: "2023",
       };
  it("should create a new book", (done) => {
    request(app)
       .post("/api/v1/book/createBook")
       .send(testData)
       .expect(201)
       .end((err, res) => {
         if (err) return done(err);
         expect(res.body).toHaveProperty("data");
         expect(res.body).toHaveProperty("message");
         expect(res.body).toHaveProperty("success", true);
         done();
       });
   });
   
   it("should return 422 for entity errors", (done) => {
    request(app)
       .post("/api/v1/book/createBook")
       .send({})
       .expect(422)
       .end((err, res) => {
         if (err) return done(err);
         done();
       });
   });
   
   it("should return 400 if failed", (done) => {
    request(app)
       .post("/api/v1/book/createBook")
       .send(invalidData)
       .expect(400)
       .end((err, res) => {
         if (err) return done(err);
         expect(res.body).toHaveProperty("message");
         expect(res.body).toHaveProperty("success", false);
         done();
       });
   });
});

describe("Get all books", () => {
  it("should return list of all books", (done) => {
    request(app)
      .get("/api/v1/book/get-all-books")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(Array.isArray(res.body.data)).toBeTruthy();
        done();
      });
  });
});

describe("Get book by id", () => {
  it("should get one book by id", (done) => {
    const bookId = 1;
    request(app)
      .get(`/api/v1/book/getbook/id/${bookId}`)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toBeTruthy();
        expect(res.body.data).toHaveProperty('id', bookId);
        done();
      });
  });

  it("should handle invalid book IDs", (done) => {
    const invalidBookId = 5;
    request(app)
      .get(`/api/v1/book/getbook/id/${invalidBookId}`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('message', 'No such book found')
        done();
      });
  });
});
describe('DELETE /delete-book/id/:id Integration Test', () => {
    it('should delete a specific book by ID', (done) => {
      const bookId = 1 
      request(app)
        .delete(`/api/v1/book/delete-book/id/${bookId}`)
        .expect(204)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });

    it('should handle deletion of an invalid book ID', (done) => {
      const invalidBookId = 123;
      request(app)
        .delete(`/api/v1/book/delete-book/id/${invalidBookId}`)
        .expect(404)
        .end((err, res) => {
          if (err) return done(err);
            expect(res.body).toHaveProperty('message', 'No such book found')
          done();
        });
    });

  });
