import express from "express";
const router = express.Router();

router.get("/books")
router.get("/books/")
router.post("/books")
router.put("/books/")
router.delete("/books")

export default router;

//3. Design the following endpoints:
// ◦ GET /books: Retrieve all books from the library.
// ◦ GET /books/:id: Retrieve a specific book by ID.
// ◦ POST /books: Add a new book to the library.
// ◦ PUT /books/:id: Update an existing book by ID.
// ◦ DELETE /books/:id: Delete a book from the library by ID