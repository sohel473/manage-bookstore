import axios from "axios";
import { editBook } from "../actions";

const updateBookRequest = (book) => async (dispatch) => {
  try {
    const response = await axios.put(
      `http://localhost:9000/books/${book.id}`,
      book
    );
    // console.log(response.data);
    dispatch(editBook(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default updateBookRequest;
