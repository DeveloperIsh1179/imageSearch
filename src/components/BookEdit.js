import { useState } from 'react';

function BookEdit({ book, edit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    edit(title, book.id);
  }

  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>Title</label>
      <input className='input' 
        value={title} 
        onChange={handleChange}
        placeholder={title}
      />
      <button className='button is-primary'>
        Save
      </button>
    </form>
  )
};

export default BookEdit;