import express from "express";
import allBooks from "../controllers/allBooks.js";
import bookbyId from "../controllers/bookbyId.js";
import addBook from "../controllers/addBook.js";
import updateBook from "../controllers/updateBook.js";
import deleteBook from "../controllers/deleteBook.js";

import validateBook from "../middlewares/validateBook.js";

const router = express.Router();

router.get("/books", allBooks);
router.get("/books/id", bookbyId);
router.post("/books/add", addBook, validateBook);
router.put("/books/update", updateBook);
router.delete("/books/delete", deleteBook);

export default router;

//3. Design the following endpoints:
// ◦ GET /books: Retrieve all books from the library.
// ◦ GET /books/:id: Retrieve a specific book by ID.
// ◦ POST /books: Add a new book to the library.
// ◦ PUT /books/:id: Update an existing book by ID.
// ◦ DELETE /books/:id: Delete a book from the library by ID
