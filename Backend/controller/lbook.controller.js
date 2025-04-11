import lBook from "../model/lbook.model.js"; 

export const getlBook = async (req, res) => {
    try {
        const lbook = await lBook.find();
        res.status(200).json(lbook);
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json(error);
    }
};