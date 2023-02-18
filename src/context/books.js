import { createContext, useState } from "react";
import Axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await Axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

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

  const valueToShare = {
    books,
    fetchBooks,
    editBookById,
    deleteBookById,
    createBook,
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;