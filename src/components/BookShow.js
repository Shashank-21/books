import { useState, useContext } from "react";
import BookEdit from "./BookEdit";
import { BookContext } from "./context/BookContext";

function BookShow({ book }) {
  const { deleteBookById, editBookById } = useContext(BookContext);
  const { id, title } = book;

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, title) => {
    editBookById(id, title);
    setShowEdit(false);
  };

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
