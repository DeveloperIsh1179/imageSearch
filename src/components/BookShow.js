import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, remove, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    remove(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (title, id) => {
    setShowEdit(false)
    onEdit(title, id);
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
      content = <BookEdit book={book} edit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      <div>{content}</div>
      <div>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
};

export default BookShow;