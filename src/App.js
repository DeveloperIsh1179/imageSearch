import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { 
        id: Math.round(Math.random() * 9999),
        title 
      }
    ];

    setBooks(updatedBooks);
  }

  const deleteBookById = (id) => {
    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBookList);
  };

  const editBookById = (newTitle, id) => {
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, title: newTitle}
      }
      return book;
    });

    setBooks(newBooks)
  }
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} remove={deleteBookById} onEdit={editBookById}/>
      <BookCreate createBook={createBook} />
    </div>
  )
}

export default App;