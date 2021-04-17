const saveBook = (books) => {
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

  export default saveBook;