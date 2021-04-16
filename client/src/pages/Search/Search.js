import React, { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import axios from "axios";
require("dotenv").config();

function Search() {
  const [books, setBooks] = useState("");

  useEffect(() => {
    // Google Books API call.
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    console.log("Api key is", apiKey);
    axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=pride+prejudice&download=epub&key=${apiKey}`
      )
      .then((res) => {
        console.log(res)
        const book = res.items;
        setBooks({ books: book });
      });
  }, []);
  const handleChange = (e) =>
    setBooks({ ...books, setBooks: e.target.value.trim() });

  const handleSearch = () => console.log("our books are: ", books);

  const saveBook = () => {
    fetch("api/books", {
      method: "POST",
      body: JSON.stringify({ books }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      // .then(data => triggerReUpload(data))
      .catch((err) => alert(err));
  };

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
