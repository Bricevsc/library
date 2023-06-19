import { BookModel } from "../model/Books.js";

export default async function (req, res) {
  try {
    const { name } = req.body;
    const book = await BookModel.findByIdAndRemove(name);
    if (!book) {
      res.status(400).send({ error: "Error: Bad request" });
    } else {
      res.status(200).send({ ok: "book deleted" });
    }
  } catch (error) {
    res.status(500).json({ ok: "false", error: error.message });
  }
}
