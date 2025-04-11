import mongoose from "mongoose";

const lbookSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String,
    Image:String,
});

const lBook = mongoose.model("lBook",lbookSchema);

export default lBook;