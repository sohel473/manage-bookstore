import {
  ADD_BOOK,
  REMOVE_BOOK,
  EDIT_BOOK,
  SET_BOOK_TO_EDIT,
  LOAD_BOOKS,
} from "./actionTypes";

const initialState = {
  books: [
    // {
    //   id: 1,
    //   name: "The Alchemist",
    //   author: "Paulo Coelho",
    //   thumbnail: "https://source.unsplash.com/featured/?alchemy",
    //   price: 12.99,
    //   rating: 5,
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   name: "To Kill a Mockingbird",
    //   author: "Harper Lee",
    //   thumbnail: "https://source.unsplash.com/featured/?mockingbird",
    //   price: 10.99,
    //   rating: 4,
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   name: "1984",
    //   author: "George Orwell",
    //   thumbnail: "https://source.unsplash.com/featured/?1984",
    //   price: 8.99,
    //   rating: 5,
    //   featured: true,
    // },
    // {
    //   id: 4,
    //   name: "The Lord of the Rings",
    //   author: "J.R.R. Tolkien",
    //   thumbnail: "https://source.unsplash.com/featured/?lordoftherings",
    //   price: 15.99,
    //   rating: 3,
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   name: "The Catcher in the Rye",
    //   author: "J.D. Salinger",
    //   thumbnail: "https://source.unsplash.com/featured/?catcher",
    //   price: 8.99,
    //   rating: 2,
    //   featured: false,
    // },
  ],
  bookToEdit: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    case SET_BOOK_TO_EDIT:
      return {
        ...state,
        bookToEdit: action.payload,
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        ),
        bookToEdit: null,
      };
    default:
      return state;
  }
};
