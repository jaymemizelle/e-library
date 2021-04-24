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

  useEffect(() => {
    // Google Books API call.
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${apiKey}`
      )
      .then((res) => {
        const book = {
          title: res.data.items[0].volumeInfo.title,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          author: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].searchInfo.textSnippet,
          link: res.data.items[0].volumeInfo.previewLink,
        };
        setBooks(book);
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleChange = (e) =>
  //   setBooks(e.target.value.trim());
  //   console.log("our book on handle change is: ", books);

  const handleSearch = (e) => {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${books.title}&download=epub&key=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        const book = {
          title: res.data.items[0].volumeInfo.title,
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          author: res.data.items[0].volumeInfo.authors,
          description: res.data.items[0].searchInfo.textSnippet,
          link: res.data.items[0].volumeInfo.previewLink,
        };
      })
      .catch((err) => console.log(err));
  };

  const saveBook = async (e) => {
    e.preventDefault();
    console.log(books);
    await axios
      .post('/api/book', {
        title: books.title,
        image: books.image,
        author: books.author,
        description: books.description,
        link: books.link
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
        // onChange={handleChange}
      />
      <BookCard imageUrl={books.image} title={books.title} description={books.description} preview={books.link} author={books.author} onClick={saveBook}/>
    </div>
  );
}

export default Search;
