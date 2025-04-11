import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    Image:String,
});

const Book = mongoose.model("Book",bookSchema);

export default Book;