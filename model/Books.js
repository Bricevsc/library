import mongoose, { version } from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  BookId: String,
  Name: String,
});

export const BookModel = model("books", BookSchema);
