import React, { useState, useEffect } from "react";
import BookCard from "../../components/BookCard/BookCard";
import axios from "axios";

function Library() {
  const [userBooksState, setUserBooksState] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/books`)
      .then((res) => setUserBooksState(res.data))
      .catch((err) => console.log(err));
  }, []);

  const goHome = () => window.location.replace("/");

  return (
    <div>
      <h2>Saved Books</h2>
      {userBooksState.map((book, i) => (
        <BookCard
          key={i}
          index={i}
          imageUrl={book.image}
          title={book.title}
          description={book.description}
          preview={book.link}
          author={book.author}
          onClick={goHome}
        />
      ))}
    </div>
  );
}

export default Library;
