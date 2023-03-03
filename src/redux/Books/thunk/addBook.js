import axios from "axios";
import { addBook } from "../actions";

const addBookRequest = (book) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:9000/books", book);
    // console.log(response.data);
    dispatch(addBook(response.data));
  } catch (error) {
    console.log(error);
  }
};

export default addBookRequest;
