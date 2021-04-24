import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import axios from "axios";
import BookCard from "../../components/Card/BookCard";
require("dotenv").config();

function Search() {
  const [books, setBooks] = useState([
    {
      title: "",
      image: "",
      author: "",
      description: "",
      link: "",
    },
  ]);
  const [bookName, setBookName] = useState("");

  useEffect(() => {
    // Google Books API call.
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=harry+potter&download=epub&key=${apiKey}`
      )
      .then((res) => {
        const book = [{
          title: res.data.items[0].volumeInfo.title,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          author: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].searchInfo.textSnippet,
          link: res.data.items[0].volumeInfo.previewLink,
        }];
        setBooks(book);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => setBookName(e.target.value.trim());

  const handleSearch = (e) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookName}&download=epub&key=${apiKey}`
      )
      .then((res) => {
        const book = {
          title: res.data.items[0].volumeInfo.title,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          author: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].searchInfo.textSnippet,
          link: res.data.items[0].volumeInfo.previewLink,
        };
        setBooks((prevBooks) => [book, ...prevBooks]);
        console.log("books state after search is: ", books);
      })
      .catch((err) => console.log(err));
  };

  const saveBook = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/book", {
        title: books.title,
        image: books.image,
        author: books.author,
        description: books.description,
        link: books.link,
      })
      .then((res) => console.log(res))
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
  );
}

export default Search;
