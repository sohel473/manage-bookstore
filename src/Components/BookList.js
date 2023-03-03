import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/Books/thunk/fetchBooks";
import Book from "./Book";
import Filters from "./Filters";

export default function BookList() {
  let books = useSelector((state) => state.books.books);

  const filters = useSelector((state) => state.filters);

  const { status, search } = filters;

  const dispatch = useDispatch();

  if (status === "Featured") {
    books = books.filter((book) => book.featured === true);
  }

  if (search) {
    books = books.filter((book) =>
      book.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  // console.log(books);

  return (
    <>
      <div className="order-2 xl:-order-1">
        {/* Filters */}
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <Filters />
        </div>

        {/* Book List */}
        <div className="lws-bookContainer">
          {/* <!-- BookCard 1 --> */}
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
}
