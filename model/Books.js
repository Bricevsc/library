import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  BookId: String,
  name: String,
  author: String,
});

export const BookModel = model("books", BookSchema);
