import React, {useState, useEffect} from "react";
import BookCard from "../../components/Card/BookCard";
import axios from "axios";

function Library() {

    const [userBooksState, setUserBooksState] = useState([])

    useEffect(() => {
        axios.get(`/api/books`)
          .then((res) => setUserBooksState(res))
          .catch((err) => console.log(err));
      }, []);


    return (
        <div>
            <h2>Saved Books</h2>
            {/* {userBooksState.map((book) => <BookCard imageUrl={book.image} title={book.title} description={book.description} preview={book.link} author={book.author}/>)} */}
            <BookCard imageUrl={userBooksState.image} title={userBooksState.title} description={userBooksState.description} preview={userBooksState.link} author={userBooksState.author}/>
        </div>
    )
}

export default Library;