import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import Axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await Axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  
  const createBook = async (title) => {
    const response = await Axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [...books, response.data,];

    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    await Axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBookList = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBookList);
  };

  const editBookById = async (newTitle, id) => {
    const response = await Axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    
    const newBooks = books.map((book) => {
      if (book.id === id) {
        return {...book, ...response.data}
      }
      return book;
    });

    setBooks(newBooks)
  }
  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList books={books} remove={deleteBookById} edit={editBookById}/>
      <BookCreate createBook={createBook} />
    </div>
  )
}

export default App;