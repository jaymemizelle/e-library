import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import axios from "axios";
import BookCard from "../../components/BookCard/BookCard";
import API from "../../utils/API"
import "./Search.css"
require("dotenv").config();

function Search() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState("");

  useEffect(() => {
      API.getBook("Harry Potter").then((res) => {
        const book = [
          {
            title: res.data.items[0].volumeInfo.title,
            image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            author: res.data.items[0].volumeInfo.authors,
            description: res.data.items[0].searchInfo.textSnippet,
            link: res.data.items[0].volumeInfo.previewLink,
          },
        ];
        setBooks(book);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => setBookName(e.target.value.trim());

  const handleSearch = (e) => {
    API.getBook(bookName).then((res) => {
        const book = {
          title: res.data.items[0].volumeInfo.title,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          author: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].searchInfo.textSnippet,
          link: res.data.items[0].volumeInfo.previewLink,
        };
        setBooks((prevBooks) => [book, ...prevBooks]);
      })
      .catch((err) => console.log(err));
  };

  const saveBook = async (e) => {
    e.preventDefault();
    const book = books[0];
    // const book = books[e.target.id]
    await axios
      .post("/api/book", {
        title: book.title,
        image: book.image,
        author: book.author,
        description: book.description,
        link: book.link,
      })
      .then((res) => res.data.message)
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form
        placeholder="Search for a book!"
        buttonName="search"
        onClick={handleSearch}
        onChange={handleChange}
      />
      <div className="bookCardsDiv">
      {books.map((book) => (
        <BookCard
          imageUrl={book.image}
          title={book.title}
          description={book.description}
          preview={book.link}
          author={book.author}
          onClick={saveBook}
        />
      ))}
      </div>
    </div>
  );
}

export default Search;
