import { BookModel } from "../model/Books.js";

export default async function (res, res) {
  try {
    const { name } = req.body;
    const book = await BookModel.findOne({ name: name });
    if (!book) {
      res.status(404).send({ ok: "false", error: "no book with this title" });
    } else {
      res.status(200).send({
        ok: "true",
        book: {
          id: book._id,
          name: book.name,
          author: book.author,
        },
      });
    }
  } catch (error) {
    res.status(500).send({ ok: "false", error: error.details });
  }
}
