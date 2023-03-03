import React from "react";
import BookForm from "./BookForm";
import BookList from "./BookList";

export default function Main() {
  return (
    <>
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          {/* <!-- BookList --> */}
          <BookList />
          {/* Book Form */}
          <BookForm />
        </div>
      </main>
    </>
  );
}
