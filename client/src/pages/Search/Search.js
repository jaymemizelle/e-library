import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import axios from "axios";
require("dotenv").config();

function Search() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    // Google Books API call.
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${apiKey}`
      )
      .then((res) => {
        console.log(res.data.items[0].searchInfo.textSnippet)
        const book = res.data.items[0].searchInfo.textSnippet;
        setBooks({ books: book });
      });
  }, []);

  const handleChange = (e) =>
    setBooks({ ...books, setBooks: e.target.value.trim() });

  const handleSearch = () => console.log("our books are: ", books);



  return (
    <Form
      placeholder="Search for a book!"
      buttonName="search"
      onClick={handleSearch}
      onChange={handleChange}
    />
  );
}

export default Search;
