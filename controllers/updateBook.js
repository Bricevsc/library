import { BookModel } from "../model/Books.js";

export default async function (res, res) {
  try {
    const { name, newName, author } = req.body;
    const book = await BookModel.replaceOne(
      { name: name },
      { name: newName, author: author }
    );
    if (!book) {
      res.status(400).send({ error: "Error: Bad request" });
    } else {
      res.status(200).send({ ok: "book updated" });
    }
  } catch (error) {
    res.status(500).json({ isRegistered: false, error: error.message });
  }
}
