const Router = require("express").Router();
const Book = require("../models/Book");

Router.get("/books", async (req, res) => {
    try {
        console.log("we are getting to get all books");
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(501);
        console.log("error in the books get route: ", err);
        res.send("unexpected server error when getting books!");
    }
});

Router.post("/book", (req, res) => {
    try {
        console.log("we got a book with: ", req.body);
        Book.create(req.body).then((res)=> console.log(res))
        res.status(201).json({message: "Book was saved!"});
    } catch (err) {
        res.status(501);
        console.log("error in the books post route: ", err);
        res.send("unexpected server error when posting a book!");
    }
});

module.exports = Router;
