import { BookModel } from "../model/Books";

export default async function (res, res) {
  try {
    await BookModel.find({});
    res.status(201).send({ ok: "true" });
  } catch (error) {
    res.status(500).send({ ok: "false", error: error.details });
  }
}
