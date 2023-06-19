import { BookModel } from "../model/Books.js";

export default async function (res, res) {
  try {
    const { name, author } = req.body;
    const book = await BookModel.findOne({ name: name });
    if (!book) {
      const book = new BookModel({ ...req.body });
      await book.save();
      res.status(201).send({
        isRegistered: true,
        book: {
          name: name,
          author: author,
        },
      });
    } else {
      res.status(400).send({ error: "Error: Bad request" });
    }
  } catch (error) {
    res.status(500).json({ isRegistered: false, error: error.message });
  }
}
