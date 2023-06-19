import { BookModel } from "../model/Books.js";

export default async function (req, res) {
  try {
    const books = await BookModel.find({});
    res.status(201).send({ ok: "true", books: books });
  } catch (error) {
    res.status(500).send({ ok: "false", error: error.details });
  }
}
