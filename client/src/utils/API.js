import axios from 'axios';

export default {
  getBook: function (bookTitle) {
      // Google Books API call.
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    return axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&download=epub&key=${apiKey}`
      )
  },
};