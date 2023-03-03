import axios from "axios";
import { loadBooks } from "../actions";

const fetchBooks = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:9000/books");
    // console.log(response.data);
    const books = response.data;
    dispatch(loadBooks(books));
  } catch (error) {
    console.log(error);
  }
};

export default fetchBooks;
