import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  bookId: String,
  name: {
    type: String,
    unique: true,
  },
  author: String,
});

export const BookModel = model("books", BookSchema);
