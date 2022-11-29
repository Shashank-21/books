import { useContext } from "react";
import BookShow from "./BookShow";
import { BookContext } from "./context/BookContext";

function BookList() {
  const { books } = useContext(BookContext);

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
