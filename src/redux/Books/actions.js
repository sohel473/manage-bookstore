import {
  ADD_BOOK,
  REMOVE_BOOK,
  SET_BOOK_TO_EDIT,
  EDIT_BOOK,
  LOAD_BOOKS,
} from "./actionTypes";

export const loadBooks = (books) => ({
  type: LOAD_BOOKS,
  payload: books,
});

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
};

export const setBookToEdit = (book) => ({
  type: SET_BOOK_TO_EDIT,
  payload: book,
});

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    payload: book,
  };
};
