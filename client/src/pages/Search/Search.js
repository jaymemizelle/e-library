import React, {useState, useEffect} from "react";
import Form from "../../components/Form/Form"

function Search() {
    const [book, setBook] = useState("");

    const handleSearch = () => {
        fetch("api/books", {
            method: "POST",
            body: JSON.stringify({ book }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            // .then(data => triggerReUpload(data))
            .catch(err => alert(err));
    };


    return (    
        <Form placeholder="Search for a book!" buttonName="search" onClick={handleSearch}/>
    )
}

export default Search;