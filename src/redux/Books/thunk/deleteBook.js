import axios from "axios";
import { removeBook } from "../actions";

const deleteBookRequest = (bookId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:9000/books/${bookId}`);
    // console.log(response.data);
    dispatch(removeBook(bookId));
  } catch (error) {
    console.log(error);
  }
};

export default deleteBookRequest;
