import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import addBookRequest from "../redux/Books/thunk/addBook";
import updateBookRequest from "../redux/Books/thunk/updateBook";

export default function BookForm() {
  const bookToEdit = useSelector((state) => state.books.bookToEdit);
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setBook({ ...book, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookToEdit) {
      dispatch(updateBookRequest(book));
    } else {
      dispatch(
        addBookRequest({
          ...book,
          id: Date.now(),
        })
      );
    }
    setBook({
      name: "",
      author: "",
      thumbnail: "",
      price: 0,
      rating: 0,
      featured: false,
    });
  };

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          Add New Book
        </h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={book.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={book.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={book.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={book.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={book.featured}
              onChange={handleChange}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {bookToEdit ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}
