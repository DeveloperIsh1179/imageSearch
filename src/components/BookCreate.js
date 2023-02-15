import { useState } from 'react';

function BookCreate({ createBook }) {
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    createBook(title);
    setTitle('');
  }
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          value={title}
          onChange={handleChange}
        />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
};

export default BookCreate;