import { BookModel } from "../model/Books.js";

export default async function (req, res) {
  try {
    const { name, newName, author } = req.body;
    const book = await BookModel.findOneAndUpdate(
      { name: name },
      { name: newName, author: author }
    );
    if (!book) {
      res.status(400).send({ error: "Error: Bad request" });
    } else {
      res.status(200).send({
        ok: "book updated",
        book: {
          name: book.name,
          author: book.author,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ isUpdated: false, error: error.message });
  }
}
