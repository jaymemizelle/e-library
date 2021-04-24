const mongoose = require('mongoose');
const Book = require("../models/Book");
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const bookSeed = [
    {
        title: "Harry Potter",
        image: "hedwig",
        author: "j.k rowling",
        description: "book about wizards",
        link: "https://harrypotter.com"
    }
];


